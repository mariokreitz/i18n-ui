import { AfterViewInit, Directive, ElementRef, inject, input, InputSignal } from '@angular/core';
import hljs from 'highlight.js';

@Directive({
  selector: 'code[appHighlightCode]',
})
export class HighlightCodeDirective implements AfterViewInit {
  public readonly language: InputSignal<string> = input<string>('typescript');
  private readonly el: ElementRef<HTMLElement> = inject(ElementRef<HTMLElement>);

  public ngAfterViewInit(): void {
    const codeElement: HTMLElement = this.el.nativeElement;
    codeElement.classList.add(`language-${this.language()}`);
    hljs.highlightElement(codeElement);
  }
}
