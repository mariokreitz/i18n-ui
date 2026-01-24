import { DOCUMENT, registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import localeEn from '@angular/common/locales/en';
import localeEs from '@angular/common/locales/es';

import localeDeExtra from '@angular/common/locales/extra/de';
import localeEnExtra from '@angular/common/locales/extra/en';
import localeEsExtra from '@angular/common/locales/extra/es';
import localeFrExtra from '@angular/common/locales/extra/fr';
import localePtExtra from '@angular/common/locales/extra/pt';
import localeTrExtra from '@angular/common/locales/extra/tr';
import localeFr from '@angular/common/locales/fr';
import localePt from '@angular/common/locales/pt';
import localeTr from '@angular/common/locales/tr';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LanguageCode, LocaleData } from './core/interfaces';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  readonly availableLanguages: Readonly<Record<LanguageCode, LocaleData>> = {
    de: [localeDe, localeDeExtra],
    en: [localeEn, localeEnExtra],
    fr: [localeFr, localeFrExtra],
    es: [localeEs, localeEsExtra],
    pt: [localePt, localePtExtra],
    tr: [localeTr, localeTrExtra],
  } as const;
  private readonly translate: TranslateService = inject(TranslateService);
  private readonly document: Document = inject(DOCUMENT);

  constructor() {
    this.translate.addLangs(Object.keys(this.availableLanguages));

    (Object.entries(this.availableLanguages) as [LanguageCode, LocaleData][]).forEach(
      ([language, [core, extra]]: [LanguageCode, LocaleData]) => {
        registerLocaleData(core, language, extra);
      },
    );
  }

  public ngOnInit(): void {
    const language: string = this.translate.getBrowserLang() || 'en';
    this.document.documentElement.lang = language;
    this.translate.use(language);

    if (['ar', 'fa', 'da', 'ks', 'ps', 'ur'].includes(language)) {
      this.document.documentElement.dir = 'rtl';
    } else {
      this.document.documentElement.dir = 'ltr';
    }
  }
}
