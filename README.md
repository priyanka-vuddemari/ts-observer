# TypeScript Observer

A hands-on DevOps project — build, test, containerise, and deploy a TypeScript/Express service that implements the Observer design pattern, end to end.

Inspired by the [Cloud Resume Challenge](https://cloudresumechallenge.dev/) — learning by doing, not by watching.

---

## What you will build

An event-driven HTTP service where:
- `POST /api/publish` — publishes an event to all subscribers on a topic
- `POST /api/subscribe` — registers a new observer on a topic
- `DELETE /api/subscribe` — removes an observer

One publish → all observers notified. That is the Observer pattern.

---

## Tech stack

| Layer | Technology |
|---|---|
| Language | TypeScript + Express |
| Tests | Jest + supertest |
| Container | Docker (multi-stage build) |
| CI | GitHub Actions |
| Registry | GitHub Container Registry (ghcr.io) |
| Kubernetes | kind (local cluster) |
| Packaging | Helm |
| Observability | Dynatrace OneAgent |

---

## Project structure
ts-observer/
├── services/
│ └── event-bus-service/ # TypeScript Express app
│ ├── src/
│ │ ├── index.ts
│ │ ├── routes/
│ │ ├── services/
│ │ ├── observers/
│ │ └── types/
│ └── tests/
├── helm/ # Helm chart
├── deployment/ # Step-by-step module guides
├── .devcontainer/ # Devcontainer config
└── .github/workflows/ # CI pipeline

---

## Modules

| Module | Topic | Status |
|---|---|---|
| 0 | Prerequisites | ✅ |
| 1 | Devcontainer setup | ✅ |
| 2 | Scaffold Express + TypeScript | ✅ |
| 3 | Write tests | 🔜 |
| 4 | Dockerize | 🔜 |
| 5 | GitHub Actions CI | 🔜 |
| 6 | Deploy to kind via Helm | 🔜 |
| 7 | Dynatrace + OneAgent | 🔜 |
| 8 | Dashboards, SLOs, alerts | 🔜 |

---

## Getting started

Clone the repo and open in a devcontainer or GitHub Codespace. Then follow the modules in [deployment/README.md](deployment/README.md).
