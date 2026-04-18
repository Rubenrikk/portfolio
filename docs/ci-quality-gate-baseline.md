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

## Cache and concurrency strategy

- All Node-based workflows use `actions/setup-node` with `cache: npm` and `cache-dependency-path: package-lock.json`.
- The caller workflow uses `concurrency` with `cancel-in-progress: true` to prevent stacked duplicate runs on active PR branches.
- The pilot uses `audit-level: critical` to keep the gate enforceable while existing high-severity advisories are remediated in follow-up work.

## Failure ownership and on-call path

1. The pull request author owns the first triage/fix for any failed required check.
2. If the author is blocked for more than 30 minutes, escalate to the repository code owner.
3. If workflow infrastructure itself is broken (runner/action outage, shared workflow failure), escalate to the CTO as CI baseline owner via [SPO-20](/SPO/issues/SPO-20).

## Rollout guide for remaining repositories

1. Copy the reusable workflow files and caller workflow into the target repository.
2. Update the caller workflow commands if the repo uses non-Node tooling.
3. Open a PR and verify all four checks run and pass.
4. Set branch protection required checks exactly to the four standard names above.
5. Document any temporary exceptions with owner and expiry date before enabling enforcement.
