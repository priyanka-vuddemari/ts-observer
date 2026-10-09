# Module 4 — Dockerize

**Time:** ~30 minutes
**Goal:** Multi-stage Docker image under 150MB.

## Step 1 — Create Dockerfile
Two stages: builder (compile TS) and production (run JS on Alpine).

## Step 2 — Create .dockerignore
Exclude: node_modules, dist, coverage, tests, .env

## Step 3 — Build
docker build -t ts-observer:local .

## Step 4 — Run
docker run --rm -p 3000:3000 ts-observer:local

## Step 5 — Smoke test
curl http://127.0.0.1:3000/health

## Checkpoint
- [ ] Image builds successfully
- [ ] Image size under 150MB
- [ ] /health returns ok from container
