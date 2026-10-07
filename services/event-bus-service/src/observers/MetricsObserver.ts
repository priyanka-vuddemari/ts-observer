import { Observer } from '../types/observer';

export class MetricsObserver implements Observer {
  private success = 0;
  private failure = 0;

  update(topic: string, _payload: unknown): void {
    try {
      this.success++;
      console.log(`[metrics] topic="${topic}" count=${this.success}`);
    } catch {
      this.failure++;
    }
  }

  getSuccessCount() { return this.success; }
  getFailureCount() { return this.failure; }
  getSuccessRate() {
    const total = this.success + this.failure;
    return total === 0 ? 1 : this.success / total;
  }
}
