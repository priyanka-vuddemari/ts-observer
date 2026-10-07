import { Observer } from '../types/observer';

export class LoggerObserver implements Observer {
  update(topic: string, payload: unknown): void {
    console.log(JSON.stringify({
      event: 'notified',
      topic,
      payload,
      ts: new Date().toISOString()
    }));
  }
}
