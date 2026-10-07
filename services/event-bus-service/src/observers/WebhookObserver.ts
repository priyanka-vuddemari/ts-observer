import { Observer } from '../types/observer';

export class WebhookObserver implements Observer {
  constructor(private readonly endpoint: string) {}

  update(topic: string, payload: unknown): void {
    console.log(`[webhook] → ${this.endpoint} topic="${topic}" payload=${JSON.stringify(payload)}`);
  }
}
