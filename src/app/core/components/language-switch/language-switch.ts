import { DOCUMENT, LowerCasePipe } from '@angular/common';
import { Component, inject, Signal, signal, WritableSignal } from '@angular/core';
import { FaIconComponent, IconDefinition } from '@fortawesome/angular-fontawesome';
import { faLanguage } from '@fortawesome/free-solid-svg-icons/faLanguage';
import { Language, TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-switch',
  imports: [FaIconComponent, LowerCasePipe, TranslatePipe],
  templateUrl: './language-switch.html',
  styleUrl: './language-switch.css',
})
export class LanguageSwitch {
  public readonly langIcon: IconDefinition = faLanguage;
  private readonly _languageList: WritableSignal<readonly Language[]> = signal<readonly Language[]>([]);
  public readonly languages: Signal<readonly Language[]> = this._languageList.asReadonly();

  private readonly _isMenuOpen: WritableSignal<boolean> = signal<boolean>(false);
  public readonly isMenuOpen: Signal<boolean> = this._isMenuOpen.asReadonly();

  private readonly translate: TranslateService = inject(TranslateService);
  private readonly document: Document = inject(DOCUMENT);

  constructor() {
    this._languageList.set([...this.translate.getLangs()]);
  }

  public toggleMenuSelection(): void {
    this._isMenuOpen.update((isOpen: boolean) => !isOpen);
  }

  public onSelectLang(lang: Language): void {
    this.translate.use(lang);
    this.document.documentElement.lang = lang;
    this._isMenuOpen.set(false);
  }
}
