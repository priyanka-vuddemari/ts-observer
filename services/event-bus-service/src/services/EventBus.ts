import { Observer, Subject } from '../types/observer';

export class EventBus implements Subject {
  private registry: Map<string, Set<Observer>> = new Map();

  subscribe(topic: string, observer: Observer): void {
    if (!this.registry.has(topic)) {
      this.registry.set(topic, new Set());
    }
    this.registry.get(topic)!.add(observer);
  }

  unsubscribe(topic: string, observer: Observer): void {
    this.registry.get(topic)?.delete(observer);
  }

  notify(topic: string, payload: unknown): void {
    const observers = this.registry.get(topic);
    if (!observers) return;
    observers.forEach(observer => {
      try {
        observer.update(topic, payload);
      } catch (err) {
        console.error(`Observer failed on topic "${topic}":`, err);
      }
    });
  }

  getSubscriberCount(topic: string): number {
    return this.registry.get(topic)?.size ?? 0;
  }
}

export const eventBus = new EventBus();
