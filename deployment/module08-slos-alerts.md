# Module 8 — Dashboards, SLOs, alerts

**Time:** ~30 minutes
**Goal:** Observer-specific SLOs and burn rate alerts in Dynatrace.

## SLO 1 — Event delivery latency
p95 of POST /publish < 200ms over 7 days

## SLO 2 — Subscriber notification success rate
>= 99.5% over 30 days

## Alerts
Burn rate alert on both SLOs at 5x threshold.

## Dashboard tiles
- Request rate
- Error rate
- Response time p50/p95/p99
- Subscriber notification success rate

## Checkpoint
- [ ] Dashboard created
- [ ] Both SLOs configured
- [ ] Burn rate alerts active
