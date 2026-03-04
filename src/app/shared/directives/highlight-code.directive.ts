import { AfterViewInit, Directive, ElementRef, inject, input, InputSignal } from '@angular/core';
import hljs from 'highlight.js/lib/core';
import { initHighlightJs } from '../utils';

@Directive({
  selector: 'code[appHighlightCode]',
})
export class HighlightCodeDirective implements AfterViewInit {
  public readonly language: InputSignal<string> = input.required<string>();
  private readonly el: ElementRef<HTMLElement> = inject(ElementRef<HTMLElement>);

  constructor() {
    initHighlightJs();
  }

  public ngAfterViewInit(): void {
    const codeElement: HTMLElement = this.el.nativeElement;
    codeElement.classList.add(`language-${this.language()}`);
    hljs.highlightElement(codeElement);
  }
}
