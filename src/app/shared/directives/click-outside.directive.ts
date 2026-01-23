import { Directive, ElementRef, inject, OnDestroy, output, OutputEmitterRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appClickOutside]',
})
export class ClickOutsideDirective implements OnDestroy {
  public readonly appClickOutside: OutputEmitterRef<void> = output<void>();
  private readonly elRef: ElementRef = inject(ElementRef);
  private readonly renderer: Renderer2 = inject(Renderer2);
  private listener: (() => void) | null = null;

  constructor() {
    this.listener = this.renderer.listen('document', 'click', (event: MouseEvent) => {
      if (!this.elRef.nativeElement.contains(event.target)) {
        this.appClickOutside.emit();
      }
    });
  }

  public ngOnDestroy(): void {
    if (this.listener) {
      this.listener();
      this.listener = null;
    }
  }
}
