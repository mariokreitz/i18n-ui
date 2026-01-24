import { DOCUMENT, ViewportScroller } from '@angular/common';
import { Component, inject, OnDestroy, OnInit, signal, WritableSignal } from '@angular/core';
import { FaIconComponent, IconDefinition } from '@fortawesome/angular-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons/faArrowUp';
import { TranslatePipe } from '@ngx-translate/core';
import { fromEvent, Subscription, throttleTime } from 'rxjs';

@Component({
  selector: 'app-back-to-top',
  standalone: true,
  imports: [FaIconComponent, TranslatePipe],
  templateUrl: './back-to-top.html',
})
export class BackToTopComponent implements OnInit, OnDestroy {
  public readonly arrowUpIcon: IconDefinition = faArrowUp;
  private readonly _isVisible: WritableSignal<boolean> = signal<boolean>(false);
  public readonly isVisible = this._isVisible.asReadonly();

  private readonly document: Document = inject(DOCUMENT);
  private readonly viewportScroller: ViewportScroller = inject(ViewportScroller);
  private scrollSubscription: Subscription | undefined;

  public ngOnInit(): void {
    if (typeof window !== 'undefined') {
      this.scrollSubscription = fromEvent(window, 'scroll')
        .pipe(throttleTime(100))
        .subscribe(() => {
          this.checkScrollPosition();
        });
    }
  }

  public ngOnDestroy(): void {
    this.scrollSubscription?.unsubscribe();
  }

  public scrollToTop(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }

  private checkScrollPosition(): void {
    const yOffset: number = window.scrollY || this.document.documentElement.scrollTop;
    this._isVisible.set(yOffset > 400);
  }
}
