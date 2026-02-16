#!/usr/bin/env node
/*
  Minimal visual regression runner using Playwright + pixelmatch.
  - Reads BASE_URL from env (required)
  - Optional VR_PAGES: comma-separated list of paths (default: "/")
  - Artifacts:
      - vr/current/*.png
      - vr/baseline/*.png (created if missing)
      - vr/diff/*.png (diffs)
  - Exits with code 0 if no diffs or first-run baseline creation; 1 if diffs exceed threshold
*/
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');
const pixelmatch = require('pixelmatch');
const { PNG } = require('pngjs');

const BASE_URL = process.env.BASE_URL;
const PAGES = (process.env.VR_PAGES || '/').split(',').map(p => p.trim()).filter(Boolean);
const DIFF_THRESHOLD = parseFloat(process.env.VR_DIFF_THRESHOLD || '0.01'); // 1% default

if (!BASE_URL) {
  console.error('BASE_URL env variable is required');
  process.exit(2);
}

const outDir = path.resolve('vr');
const dirs = {
  baseline: path.join(outDir, 'baseline'),
  current: path.join(outDir, 'current'),
  diff: path.join(outDir, 'diff')
};
Object.values(dirs).forEach(d => fs.mkdirSync(d, { recursive: true }));

function sanitize(name) {
  return name.replace(/[^a-z0-9-_]/gi, '_');
}

async function takeScreenshot(page, urlPath, filePath) {
  await page.goto(BASE_URL.replace(/\/$/, '') + urlPath, { waitUntil: 'networkidle' });
  await page.waitForTimeout(300);
  await page.screenshot({ path: filePath, fullPage: true });
}

function readPng(filePath) {
  return PNG.sync.read(fs.readFileSync(filePath));
}

function writePng(img, filePath) {
  fs.writeFileSync(filePath, PNG.sync.write(img));
}

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1366, height: 900 } });
  const page = await context.newPage();

  let hasDiffs = false;
  let firstRun = false;

  for (const urlPath of PAGES) {
    const name = sanitize(urlPath || 'home');
    const currentPath = path.join(dirs.current, `${name}.png`);
    const baselinePath = path.join(dirs.baseline, `${name}.png`);
    const diffPath = path.join(dirs.diff, `${name}.diff.png`);

    await takeScreenshot(page, urlPath.startsWith('/') ? urlPath : `/${urlPath}`, currentPath);

    if (!fs.existsSync(baselinePath)) {
      // First run for this page: create baseline from current
      fs.copyFileSync(currentPath, baselinePath);
      firstRun = true;
      console.log(`Baseline created for ${urlPath} → ${path.relative(process.cwd(), baselinePath)}`);
      continue;
    }

    const imgBaseline = readPng(baselinePath);
    const imgCurrent = readPng(currentPath);

    const width = Math.max(imgBaseline.width, imgCurrent.width);
    const height = Math.max(imgBaseline.height, imgCurrent.height);

    const baselinePadded = new PNG({ width, height });
    PNG.bitblt(imgBaseline, baselinePadded, 0, 0, imgBaseline.width, imgBaseline.height, 0, 0);
    const currentPadded = new PNG({ width, height });
    PNG.bitblt(imgCurrent, currentPadded, 0, 0, imgCurrent.width, imgCurrent.height, 0, 0);

    const diff = new PNG({ width, height });
    const diffPixels = pixelmatch(baselinePadded.data, currentPadded.data, diff.data, width, height, { threshold: 0.1 });
    const totalPixels = width * height;
    const ratio = diffPixels / totalPixels;

    if (ratio > DIFF_THRESHOLD) {
      writePng(diff, diffPath);
      hasDiffs = true;
      console.log(`Visual diff detected for ${urlPath}: ${(ratio * 100).toFixed(2)}% > ${(DIFF_THRESHOLD * 100).toFixed(2)}%`);
    } else {
      console.log(`No significant diff for ${urlPath}: ${(ratio * 100).toFixed(2)}% <= ${(DIFF_THRESHOLD * 100).toFixed(2)}%`);
    }
  }

  await browser.close();

  if (firstRun) {
    console.log('Baseline images created. Subsequent runs will compare against these.');
    process.exit(0);
  }

  if (hasDiffs) {
    process.exit(1);
  } else {
    process.exit(0);
  }
})().catch((err) => {
  console.error(err);
  process.exit(2);
});


