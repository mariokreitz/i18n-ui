import { DOCUMENT, ViewportScroller } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FaIconComponent, IconDefinition } from '@fortawesome/angular-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons/faArrowUp';
import { TranslatePipe } from '@ngx-translate/core';
import { fromEvent, throttleTime } from 'rxjs';

@Component({
  selector: 'app-back-to-top',
  imports: [FaIconComponent, TranslatePipe],
  templateUrl: './back-to-top.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackToTopComponent {
  public readonly arrowUpIcon: IconDefinition = faArrowUp;
  private readonly _isVisible = signal<boolean>(false);
  public readonly isVisible = this._isVisible.asReadonly();

  private readonly document: Document = inject(DOCUMENT);
  private readonly viewportScroller: ViewportScroller = inject(ViewportScroller);
  private readonly destroyRef: DestroyRef = inject(DestroyRef);

  constructor() {
    if (typeof window !== 'undefined') {
      fromEvent(window, 'scroll')
        .pipe(throttleTime(100), takeUntilDestroyed(this.destroyRef))
        .subscribe(() => {
          const yOffset: number = window.scrollY || this.document.documentElement.scrollTop;
          this._isVisible.set(yOffset > 400);
        });
    }
  }

  public scrollToTop(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}
