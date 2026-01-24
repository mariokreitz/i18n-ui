import { DOCUMENT, LowerCasePipe } from '@angular/common';
import { Component, computed, ElementRef, inject, Signal, signal, viewChild, viewChildren, WritableSignal } from '@angular/core';
import { FaIconComponent, IconDefinition } from '@fortawesome/angular-fontawesome';
import { faLanguage } from '@fortawesome/free-solid-svg-icons/faLanguage';
import { Language, TranslatePipe, TranslateService } from '@ngx-translate/core';
import { ClickOutsideDirective } from '../../../shared/directives';

@Component({
  selector: 'app-language-switch',
  imports: [FaIconComponent, LowerCasePipe, TranslatePipe, ClickOutsideDirective],
  templateUrl: './language-switch.html',
  styleUrl: './language-switch.css',
})
export class LanguageSwitch {
  public readonly langIcon: IconDefinition = faLanguage;
  public isCurrentLanguage = computed<(lang: Language) => boolean>(() => {
    const current: string | null = this.currentLanguage();
    return (lang: Language) => lang === current;
  });
  private readonly toggleBtn: Signal<ElementRef<HTMLButtonElement>> = viewChild.required<ElementRef<HTMLButtonElement>>('toggleBtn');
  private readonly langButtons: Signal<readonly ElementRef<HTMLButtonElement>[]> =
    viewChildren<ElementRef<HTMLButtonElement>>('langButton');
  private readonly _languageList: WritableSignal<readonly Language[]> = signal<readonly Language[]>([]);
  public readonly languages: Signal<readonly Language[]> = this._languageList.asReadonly();
  private readonly _isMenuOpen: WritableSignal<boolean> = signal<boolean>(false);
  public readonly isMenuOpen: Signal<boolean> = this._isMenuOpen.asReadonly();
  private readonly _currentLanguage: WritableSignal<Language | null> = signal<Language | null>(null);
  public readonly currentLanguage: Signal<Language | null> = this._currentLanguage.asReadonly();
  private focusedIndex = -1;
  private readonly translate: TranslateService = inject(TranslateService);
  private readonly document: Document = inject(DOCUMENT);

  constructor() {
    this._languageList.set([...this.translate.getLangs()]);
    this._currentLanguage.set(this.translate.getCurrentLang());
  }

  public toggleMenuSelection(): void {
    if (this._isMenuOpen()) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  }

  public closeMenu(): void {
    this._isMenuOpen.set(false);
    this.focusedIndex = -1;
  }

  public openMenu(): void {
    this._isMenuOpen.set(true);
  }

  public onSelectLang(lang: Language): void {
    this.document.documentElement.lang = lang;
    this.translate.use(lang);
    this._currentLanguage.set(lang);
    this.closeMenu();
    this.toggleBtn().nativeElement.focus();
  }

  public onToggleKeydown(event: KeyboardEvent): void {
    if (['Enter', ' ', 'ArrowDown', 'ArrowUp'].includes(event.key)) {
      event.preventDefault();
      this.openMenu();
      setTimeout(() => this.focusFirstItem());
    }
  }

  public onMenuKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      event.preventDefault();
      this.closeMenu();
      this.toggleBtn().nativeElement.focus();
      return;
    }

    const buttons: readonly ElementRef<HTMLButtonElement>[] = this.langButtons();
    if (!buttons.length) return;

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      this.focusedIndex = (this.focusedIndex + 1) % buttons.length;
      buttons[this.focusedIndex]?.nativeElement.focus();
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      this.focusedIndex = (this.focusedIndex - 1 + buttons.length) % buttons.length;
      buttons[this.focusedIndex]?.nativeElement.focus();
    } else if (event.key === 'Home') {
      event.preventDefault();
      this.focusedIndex = 0;
      buttons[0]?.nativeElement.focus();
    } else if (event.key === 'End') {
      event.preventDefault();
      this.focusedIndex = buttons.length - 1;
      buttons[buttons.length - 1]?.nativeElement.focus();
    }
  }

  private focusFirstItem(): void {
    const buttons: readonly ElementRef<HTMLButtonElement>[] = this.langButtons();
    if (buttons.length > 0) {
      this.focusedIndex = 0;
      buttons[0]?.nativeElement.focus();
    }
  }
}
