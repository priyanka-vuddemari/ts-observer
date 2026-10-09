# Module 7 — Dynatrace + OneAgent

**Time:** ~45 minutes
**Goal:** Traces and metrics flowing into Dynatrace automatically.

## Step 1 — Start trial
https://www.dynatrace.com/trial

## Step 2 — Create API tokens
Token 1: WriteConfig, ReadConfig, DataExport, InstallerDownload
Token 2: metrics.ingest, logs.ingest

## Step 3 — Add Helm repo
helm repo add dynatrace https://raw.githubusercontent.com/Dynatrace/dynatrace-operator/main/config/helm/repos/stable

## Step 4 — Install Operator
kubectl create namespace dynatrace
helm install dynatrace-operator dynatrace/dynatrace-operator --namespace dynatrace

## Step 5 — Apply DynaKube
kubectl apply -f deployment/dynakube.yaml

## Checkpoint
- [ ] OneAgent pod is Running
- [ ] ts-observer appears in Dynatrace Services
