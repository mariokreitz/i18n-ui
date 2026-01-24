import { Injectable, Signal, signal, WritableSignal } from '@angular/core';

export interface Toast {
  message: string;
  type: 'success' | 'info' | 'error';
  id: number;
}

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private readonly _toast: WritableSignal<Toast | null> = signal<Toast | null>(null);
  public readonly toast: Signal<Toast | null> = this._toast.asReadonly();
  private timeoutId: ReturnType<typeof setTimeout> | null = null;

  public show(message: string, type: 'success' | 'info' | 'error' = 'success', duration = 3000): void {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }

    this._toast.set({ message, type, id: Date.now() });

    this.timeoutId = setTimeout(() => {
      this.dismiss();
    }, duration);
  }

  public dismiss(): void {
    this._toast.set(null);
  }
}
