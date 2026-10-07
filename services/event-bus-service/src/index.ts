import express from 'express';
import eventsRouter from './routes/events';
import { eventBus } from './services/EventBus';
import { LoggerObserver } from './observers/LoggerObserver';
import { MetricsObserver } from './observers/MetricsObserver';

const app = express();
app.use(express.json());

export const metricsObserver = new MetricsObserver();
const logger = new LoggerObserver();

eventBus.subscribe('orders', logger);
eventBus.subscribe('orders', metricsObserver);
eventBus.subscribe('inventory', logger);

app.use('/api', eventsRouter);

app.get('/health', (_req, res) => res.json({ status: 'ok' }));

const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => console.log(`ts-observer listening on :${PORT}`));

export default app;
