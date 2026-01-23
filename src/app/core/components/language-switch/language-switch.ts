import { DOCUMENT, LowerCasePipe } from '@angular/common';
import { Component, computed, inject, Signal, signal, WritableSignal } from '@angular/core';
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
  private readonly _languageList: WritableSignal<readonly Language[]> = signal<readonly Language[]>([]);
  public readonly languages: Signal<readonly Language[]> = this._languageList.asReadonly();
  private readonly _isMenuOpen: WritableSignal<boolean> = signal<boolean>(false);
  public readonly isMenuOpen: Signal<boolean> = this._isMenuOpen.asReadonly();
  private readonly _currentLanguage: WritableSignal<Language | null> = signal<Language | null>(null);
  public readonly currentLanguage: Signal<Language | null> = this._currentLanguage.asReadonly();
  public isCurrentLanguage = computed<(lang: Language) => boolean>(() => {
    const current: string | null = this.currentLanguage();
    return (lang: Language) => lang === current;
  });
  private readonly translate: TranslateService = inject(TranslateService);
  private readonly document: Document = inject(DOCUMENT);

  constructor() {
    this._languageList.set([...this.translate.getLangs()]);
    this._currentLanguage.set(this.translate.getCurrentLang());
  }

  public toggleMenuSelection(): void {
    this._isMenuOpen.update((isOpen: boolean) => !isOpen);
  }

  public onSelectLang(lang: Language): void {
    this.translate.use(lang);
    this.document.documentElement.lang = lang;
    this._currentLanguage.set(lang);
    this._isMenuOpen.set(false);
  }
}
