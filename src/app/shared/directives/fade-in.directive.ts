import { Directive, ElementRef, inject, OnDestroy, OnInit } from '@angular/core';

@Directive({
  selector: '[appFadeIn]',
  standalone: true,
})
export class FadeInDirective implements OnInit, OnDestroy {
  private readonly element: ElementRef<HTMLElement> = inject(ElementRef);
  private observer: IntersectionObserver | undefined;

  public ngOnInit(): void {
    this.setupInitialStyles();
    this.createObserver();
  }

  public ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private setupInitialStyles(): void {
    const el = this.element.nativeElement;
    el.classList.add('transition-all', 'duration-700', 'ease-out');
    el.classList.add('opacity-0', 'translate-y-8');
  }

  private createObserver(): void {
    if (
      typeof IntersectionObserver === 'undefined' ||
      (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    ) {
      this.revealOnly();
      return;
    }

    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.reveal();
          this.observer?.unobserve(entry.target);
        }
      });
    }, options);

    this.observer.observe(this.element.nativeElement);
  }

  private reveal(): void {
    const el = this.element.nativeElement;
    el.classList.remove('opacity-0', 'translate-y-8');
    el.classList.add('opacity-100', 'translate-y-0');
  }

  private revealOnly(): void {
    const el = this.element.nativeElement;
    el.classList.remove('opacity-0', 'translate-y-8');
  }
}
