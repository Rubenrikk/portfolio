# CI Quality Gate Baseline

This repository provides reusable GitHub Actions workflow templates for the baseline quality gates defined in [SPO-20](/SPO/issues/SPO-20).

## Reusable workflows

- `.github/workflows/reusable-lint.yml`
- `.github/workflows/reusable-test.yml`
- `.github/workflows/reusable-dependency-audit.yml`
- `.github/workflows/reusable-secret-scan.yml`

These are consumed by `.github/workflows/ci-quality-gate.yml` in this pilot repository.

## Standard required status checks

Configure branch protection on `main` to require these checks:

- `CI Quality Gate Baseline / lint`
- `CI Quality Gate Baseline / test`
- `CI Quality Gate Baseline / dependency-audit`
- `CI Quality Gate Baseline / secret-scan`

> **DO NOT RENAME.** These check names are derived from `name: CI Quality Gate Baseline` in `.github/workflows/ci-quality-gate.yml` and the `name:` field of each reusable workflow's job. Renaming the caller workflow, its `name:` value, or any job name will silently break branch protection everywhere the baseline is consumed, because the required-check strings above will stop matching. Treat these names as a branch-protection contract; coordinate any change via [SPO-20](/SPO/issues/SPO-20).

## Secret scanning: gitleaks licensing

The baseline invokes the upstream `gitleaks` CLI directly from the reusable workflow rather than using `gitleaks/gitleaks-action@v2`. Rationale:

- The `gitleaks-action@v2` wrapper requires a paid `GITLEAKS_LICENSE` environment variable for organisation-owned repositories (including `Sportvereniging-H-G-V/*`). Without it, runs fail immediately on org repos.
- The upstream gitleaks CLI itself is MIT-licensed and free for any use.
- Invoking the binary directly keeps the baseline free of paid-license dependencies and avoids per-org secret provisioning.

The reusable workflow pins a specific gitleaks release (see `.github/workflows/reusable-secret-scan.yml`). Bumping that version is an explicit, reviewed change. SARIF upload is intentionally not wired in the baseline; see the permissions contract section below.

## Workflow permissions contract

Reusable workflows in GitHub Actions can never expand the permissions granted by the caller — any token scope the reusable requests beyond what the caller allows is silently dropped. To avoid a false sense of elevated access, the baseline enforces:

- `ci-quality-gate.yml` (caller) grants `permissions: contents: read` only.
- Every reusable workflow it calls declares exactly the same `permissions: contents: read` block. No reusable workflow declares `security-events: write` in the baseline.
- When SARIF upload is wired, it will ship as a separate, opt-in reusable variant (for example `reusable-secret-scan-sarif.yml`) that declares the elevated grant, and the caller workflow (or an overlay caller) will grant `security-events: write` explicitly. Do **not** add `security-events: write` to the existing reusable workflows without also updating the caller.

## Cache and concurrency strategy

- All Node-based workflows use `actions/setup-node` with `node-version-file: .nvmrc` (pin **Node 20** in the repo root), `cache: npm`, and `cache-dependency-path: package-lock.json`.
- The caller workflow uses `concurrency` with `cancel-in-progress: true` to prevent stacked duplicate runs on active PR branches.
- The pilot uses `audit-level: critical` to keep the gate enforceable while existing high-severity advisories are remediated in follow-up work.

## Audit level transition (`critical` → `high`)

| Milestone | Target |
| --------- | ------ |
| **Now** | Caller passes `audit-level: critical` (temporary). |
| **Goal** | Align caller with the reusable default `high`. |
| **Deadline** | Before **Wave 4 portfolio hardening** lands; if Wave 4 is not scheduled by **2026-06-01**, treat that date as the hard deadline and escalate slippage to the CEO via [SPO-20](/SPO/issues/SPO-20). |

When the deadline hits, drop the `with.audit-level` override in `ci-quality-gate.yml` so the reusable default (`high`) applies, and re-run the gate on a throwaway PR before tightening org-wide.

## Failure ownership and on-call path

1. The pull request author owns the first triage/fix for any failed required check.
2. If the author is blocked for more than 30 minutes, escalate to the repository code owner.
3. If workflow infrastructure itself is broken (runner/action outage, shared workflow failure), escalate to the CTO as CI baseline owner via [SPO-20](/SPO/issues/SPO-20).
4. If the CTO is offline and infra is still blocked after a reasonable window, the **board user** on duty is the fallback contact (same routing key: [SPO-20](/SPO/issues/SPO-20)).

## Portfolio pilot: enforce-shape → substantive gate

This repository (`Rubenrikk/portfolio`) adopted the baseline while **`lint` and `test` were placeholders** (`npm run lint` absent; `npm test` echoed “No tests yet”). That was intentional: branch protection could enforce workflow *shape* first without blocking on real static analysis or tests.

**Substantive gate (landed 2026-04-18):** `npm run lint` now runs **ESLint** (flat config, `eslint-plugin-astro` + `typescript-eslint`) plus **`astro check`**. `npm test` runs **Vitest** with at least one smoke test (`tests/smoke.test.ts`). The required checks `CI Quality Gate Baseline / lint` and `… / test` therefore fail on real regressions, not only on missing scripts.

Follow-up: [SPO-32](/SPO/issues/SPO-32).

## Production path: baseline vs Cloudflare Pages deploy

This repo runs **two** workflows on `main` pushes and on pull requests targeting `main`:

| Workflow | File | Role |
| -------- | ---- | ---- |
| CI Quality Gate Baseline | `.github/workflows/ci-quality-gate.yml` | Required checks ([SPO-20](/SPO/issues/SPO-20)); must stay green before merge under [SPO-19](/SPO/issues/SPO-19) branch protection. |
| Deploy to Cloudflare Pages | `.github/workflows/deploy.yml` | `npm ci`, `npm run build`, publish `dist/` to Pages. |

They are **separate** GitHub Actions workflows with **no `needs:` edge** between them. That keeps the branch-protection contract stable (check names unchanged) and avoids coupling deploy tokens to the reusable-workflow graph.

**Operational reliance:** `main` should only move via PR with the four required checks passing. That is the primary guarantee that production-bound commits were gated.

**Residual risk:** An admin bypass or a protection misconfiguration could still publish from `deploy.yml` without the gate. **Owner:** repository admins; **mitigation:** keep rulesets/branch protection enforced on `main`, avoid direct pushes except documented break-glass, and run `npm run lint`, `npm test`, and `npm run build` locally before any emergency push.

**Rollback:** Revert on `main` and allow a new deploy run, or roll back to a prior deployment in the Cloudflare Pages UI.

## Rollout guide for remaining repositories

1. Copy the reusable workflow files, caller workflow, and **`.nvmrc`** into the target repository.
2. Update the caller workflow commands if the repo uses non-Node tooling.
3. Open a PR and verify all four checks run and pass.
4. **Branch protection (REST example).** Enable protection on `main` with **required status checks** exactly matching the four strings above, **require branches to be up to date before merging** (`strict` required checks / “Require status checks to pass before merging” + strict), and **enforce for administrators** unless you have a documented break-glass policy.

   Minimal shape (adapt IDs/contexts to the checks GitHub lists for *your* repo — names must match what Actions reports):

   ```bash
   gh api --method PUT "repos/{owner}/{repo}/branches/main/protection" \
     -f "required_status_checks[strict]=true" \
     -f "enforce_admins=true" \
     -f "required_linear_history=true" \
     -f "required_conversation_resolution=true" \
     -F "required_pull_request_reviews[dismiss_stale_reviews]=true" \
     -F "required_pull_request_reviews[required_approving_review_count]=1" \
     -f "required_signatures=false" \
     -f "restrictions=null" \
     -f "required_status_checks[checks][][context]=CI Quality Gate Baseline / lint" \
     -f "required_status_checks[checks][][context]=CI Quality Gate Baseline / test" \
     -f "required_status_checks[checks][][context]=CI Quality Gate Baseline / dependency-audit" \
     -f "required_status_checks[checks][][context]=CI Quality Gate Baseline / secret-scan"
   ```

   For GitHub Actions checks, include each check’s `app_id` (usually **15368** for `github-actions`) if the API rejects `null` app IDs — mirror whatever the “Required checks” picker shows after one green run.

   If `GET repos/{owner}/{repo}/branches/main/protection` returns **404**, protection is not enabled yet; the call above creates it.

5. Document any temporary exceptions with owner and expiry date before enabling enforcement.

## Baseline rollback (branch protection)

If the gate blocks merges during rollout: **remove the four baseline checks from `main` branch protection** (or delete the protection rule), then **revert the workflow PR** on `main`. No database or tenant data migration is involved.
