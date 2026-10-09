# Module 5 — GitHub Actions CI

**Time:** ~45 minutes
**Goal:** Every push runs lint, test, build, push image to ghcr.io.

## Pipeline
lint → test → build + push :sha tag

## Step 1 — Create .github/workflows/ci.yml
Three jobs: lint, test, build.

## Step 2 — Push and verify
git push origin main
Check Actions tab on GitHub.

## Step 3 — Find your image
GitHub profile → Packages → ts-observer

## Checkpoint
- [ ] All three jobs pass
- [ ] Image appears in ghcr.io with SHA tag
