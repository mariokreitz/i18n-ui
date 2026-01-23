import { DOCUMENT, registerLocaleData } from '@angular/common';
import localeAm from '@angular/common/locales/am';
import localeAr from '@angular/common/locales/ar';
import localeAz from '@angular/common/locales/az';
import localeBs from '@angular/common/locales/bs';
import localeDa from '@angular/common/locales/da';
import localeDe from '@angular/common/locales/de';
import localeEn from '@angular/common/locales/en';
import localeEs from '@angular/common/locales/es';
import localeAmExtra from '@angular/common/locales/extra/am';
import localeArExtra from '@angular/common/locales/extra/ar';
import localeAzExtra from '@angular/common/locales/extra/az';
import localeBsExtra from '@angular/common/locales/extra/bs';
import localeDaExtra from '@angular/common/locales/extra/da';
import localeDeExtra from '@angular/common/locales/extra/de';
import localeEnExtra from '@angular/common/locales/extra/en';
import localeEsExtra from '@angular/common/locales/extra/es';
import localeFaExtra from '@angular/common/locales/extra/fa';
import localeFrExtra from '@angular/common/locales/extra/fr';
import localeHiExtra from '@angular/common/locales/extra/hi';
import localeHrExtra from '@angular/common/locales/extra/hr';
import localeHyExtra from '@angular/common/locales/extra/hy';
import localeKaExtra from '@angular/common/locales/extra/ka';
import localeKkExtra from '@angular/common/locales/extra/kk';
import localeKsExtra from '@angular/common/locales/extra/ks';
import localeMkExtra from '@angular/common/locales/extra/mk';
import localePaExtra from '@angular/common/locales/extra/pa';
import localePsExtra from '@angular/common/locales/extra/ps';
import localePtExtra from '@angular/common/locales/extra/pt';
import localeRoExtra from '@angular/common/locales/extra/ro';
import localeRuExtra from '@angular/common/locales/extra/ru';
import localeSiExtra from '@angular/common/locales/extra/si';
import localeSoExtra from '@angular/common/locales/extra/so';
import localeSqExtra from '@angular/common/locales/extra/sq';
import localeSrExtra from '@angular/common/locales/extra/sr';
import localeSwExtra from '@angular/common/locales/extra/sw';
import localeTaExtra from '@angular/common/locales/extra/ta';
import localeTiExtra from '@angular/common/locales/extra/ti';
import localeTrExtra from '@angular/common/locales/extra/tr';
import localeUkExtra from '@angular/common/locales/extra/uk';
import localeUrExtra from '@angular/common/locales/extra/ur';
import localeUzExtra from '@angular/common/locales/extra/uz';
import localeViExtra from '@angular/common/locales/extra/vi';
import localeMdExtra from '@angular/common/locales/extra/zh';
import localeFa from '@angular/common/locales/fa';
import localeFr from '@angular/common/locales/fr';
import localeHi from '@angular/common/locales/hi';
import localeHr from '@angular/common/locales/hr';
import localeHy from '@angular/common/locales/hy';
import localeKa from '@angular/common/locales/ka';
import localeKk from '@angular/common/locales/kk';
import localeKs from '@angular/common/locales/ks';
import localeMk from '@angular/common/locales/mk';
import localePa from '@angular/common/locales/pa';
import localePs from '@angular/common/locales/ps';
import localePt from '@angular/common/locales/pt';
import localeRo from '@angular/common/locales/ro';
import localeRu from '@angular/common/locales/ru';
import localeSi from '@angular/common/locales/si';
import localeSo from '@angular/common/locales/so';
import localeSq from '@angular/common/locales/sq';
import localeSr from '@angular/common/locales/sr';
import localeSw from '@angular/common/locales/sw';
import localeTa from '@angular/common/locales/ta';
import localeTi from '@angular/common/locales/ti';
import localeTr from '@angular/common/locales/tr';
import localeUk from '@angular/common/locales/uk';
import localeUr from '@angular/common/locales/ur';
import localeUz from '@angular/common/locales/uz';
import localeVi from '@angular/common/locales/vi';
import localeMd from '@angular/common/locales/zh';
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
    uk: [localeUk, localeUkExtra],
    ar: [localeAr, localeArExtra],
    fa: [localeFa, localeFaExtra],
    am: [localeAm, localeAmExtra],
    es: [localeEs, localeEsExtra],
    hr: [localeHr, localeHrExtra],
    ks: [localeKs, localeKsExtra],
    kk: [localeKk, localeKkExtra],
    ps: [localePs, localePsExtra],
    ro: [localeRo, localeRoExtra],
    ru: [localeRu, localeRuExtra],
    so: [localeSo, localeSoExtra],
    sq: [localeSq, localeSqExtra],
    bs: [localeBs, localeBsExtra],
    tr: [localeTr, localeTrExtra],
    vi: [localeVi, localeViExtra],
    da: [localeDa, localeDaExtra],
    sr: [localeSr, localeSrExtra],
    mk: [localeMk, localeMkExtra],
    ur: [localeUr, localeUrExtra],
    ka: [localeKa, localeKaExtra],
    ta: [localeTa, localeTaExtra],
    uz: [localeUz, localeUzExtra],
    md: [localeMd, localeMdExtra],
    sw: [localeSw, localeSwExtra],
    ti: [localeTi, localeTiExtra],
    hy: [localeHy, localeHyExtra],
    az: [localeAz, localeAzExtra],
    hi: [localeHi, localeHiExtra],
    pt: [localePt, localePtExtra],
    si: [localeSi, localeSiExtra],
    pa: [localePa, localePaExtra],
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

    if (['ar', 'fa', 'da', 'ks', 'ps', 'ur'].includes(language)) {
      this.document.documentElement.dir = 'rtl';
    } else {
      this.document.documentElement.dir = 'ltr';
    }
  }
}
