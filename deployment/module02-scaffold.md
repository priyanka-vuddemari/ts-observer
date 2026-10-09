# Module 2 — Scaffold Express + TypeScript

**Time:** ~45 minutes
**Goal:** A running Express service at localhost:3000 implementing the Observer pattern.

## The Observer pattern
Three roles:
- **Subject** (EventBus) — holds a registry of observers per topic. subscribe, unsubscribe, notify.
- **Observer interface** — contract: update(topic, payload)
- **Concrete observers** — implement the interface and react to events.

Express is just an HTTP skin over the EventBus.

## Project structure
src/
├── index.ts                  # app entry point, registers default observers
├── types/observer.ts         # Observer, Subject, EventPayload interfaces
├── services/EventBus.ts      # Subject implementation, singleton
├── observers/
│   ├── LoggerObserver.ts     # logs events to stdout as JSON
│   ├── MetricsObserver.ts    # tracks success/failure counts
│   └── WebhookObserver.ts    # POSTs events to an endpoint
└── routes/events.ts          # POST /publish, POST /subscribe, DELETE /subscribe

## Step 1 — Init and install
cd services/event-bus-service
npm init -y
npm install express
npm install -D typescript ts-node nodemon @types/node @types/express eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin

## Step 2 — tsconfig.json
strict mode, outDir: dist, rootDir: src, target: ES2022

## Step 3 — Types
src/types/observer.ts — Observer, Subject, EventPayload interfaces

## Step 4 — EventBus
src/services/EventBus.ts — Map<topic, Set<Observer>>, exported as singleton

## Step 5 — Concrete observers
LoggerObserver, MetricsObserver, WebhookObserver

## Step 6 — Routes
POST /publish → eventBus.notify() → 202
POST /subscribe → eventBus.subscribe() → 201
DELETE /subscribe → 200

## Step 7 — index.ts
Registers default observers on startup, mounts routes, starts server.

## Step 8 — npm scripts
dev, build, start, lint

## Smoke test
curl -X POST http://127.0.0.1:3000/api/subscribe -H 'Content-Type: application/json' -d '{"topic":"orders"}'
curl -X POST http://127.0.0.1:3000/api/publish -H 'Content-Type: application/json' -d '{"topic":"orders","data":{"orderId":"abc"}}'

Watch the server terminal — all observers print output on publish.

## Checkpoint
- [ ] npm run dev starts without errors
- [ ] POST /api/subscribe returns subscribed: true
- [ ] POST /api/publish returns accepted: true and triggers observer output
- [ ] GET /health returns status: ok
- [ ] npm run lint passes
