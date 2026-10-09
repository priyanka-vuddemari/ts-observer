# Module 3 — Write tests

**Time:** ~45 minutes
**Goal:** npm test passes with 80% coverage.

## Step 1 — Install dependencies
npm install -D jest ts-jest supertest @types/jest @types/supertest

## Step 2 — Create jest.config.ts
See module guide for full config.

## Step 3 — Unit test EventBus
Tests: subscribe, unsubscribe, notify, error isolation.

## Step 4 — Integration test routes
Tests: POST /publish, POST /subscribe, GET /health.

## Step 5 — Run
npm test

## Checkpoint
- [ ] All tests pass
- [ ] Coverage >= 80%
