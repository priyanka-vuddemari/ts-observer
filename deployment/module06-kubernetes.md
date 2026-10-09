# Module 6 — Deploy to kind via Helm

**Time:** ~60 minutes
**Goal:** Service running in Kubernetes, accessible via port-forward.

## Step 1 — Create cluster
kind create cluster --name ts-observer

## Step 2 — Create Helm chart
helm create helm/ts-observer

## Step 3 — Load image into kind
kind load docker-image ts-observer:local --name ts-observer

## Step 4 — Install
helm install ts-observer ./helm/ts-observer

## Step 5 — Smoke test
kubectl port-forward svc/ts-observer 3000:80
curl http://127.0.0.1:3000/health

## Step 6 — Upgrade flow
helm upgrade ts-observer ./helm/ts-observer --set image.tag=<sha>

## Checkpoint
- [ ] Pod is Running
- [ ] /health returns ok via port-forward
- [ ] helm upgrade works
