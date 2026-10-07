import { Router, Request, Response } from 'express';
import { eventBus } from '../services/EventBus';
import { LoggerObserver } from '../observers/LoggerObserver';

const router = Router();

router.post('/publish', (req: Request, res: Response) => {
  const { topic, data } = req.body;
  if (!topic) {
    res.status(400).json({ error: 'topic is required' });
    return;
  }
  eventBus.notify(topic, data ?? null);
  res.status(202).json({ accepted: true, topic });
});

router.post('/subscribe', (req: Request, res: Response) => {
  const { topic } = req.body;
  if (!topic) {
    res.status(400).json({ error: 'topic is required' });
    return;
  }
  eventBus.subscribe(topic, new LoggerObserver());
  res.status(201).json({ subscribed: true, topic, subscribers: eventBus.getSubscriberCount(topic) });
});

router.delete('/subscribe', (req: Request, res: Response) => {
  const { topic } = req.body;
  if (!topic) {
    res.status(400).json({ error: 'topic is required' });
    return;
  }
  res.status(200).json({ unsubscribed: true, topic });
});

export default router;
