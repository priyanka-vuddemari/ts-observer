export interface Observer {
  update(topic: string, payload: unknown): void;
}

export interface Subject {
  subscribe(topic: string, observer: Observer): void;
  unsubscribe(topic: string, observer: Observer): void;
  notify(topic: string, payload: unknown): void;
}

export interface EventPayload {
  topic: string;
  data: unknown;
  timestamp: string;
}
