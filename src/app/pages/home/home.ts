import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Meta, Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { LanguageCode } from '../../core/interfaces';
import { RootLayout } from '../../core/layouts/root-layout/root-layout';
import { Faq } from '../../features/faq/faq';
import { Features } from '../../features/features/features';
import { GettingStarted } from '../../features/getting-started/getting-started';
import { Hero } from '../../features/hero/hero';
import { SimpleToUse } from '../../features/simple-to-use/simple-to-use';

@Component({
  selector: 'app-home',
  imports: [RootLayout, Hero, Features, SimpleToUse, GettingStarted, Faq],
  templateUrl: './home.html',
  styleUrl: './home.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Home implements OnInit {
  private readonly localeByLanguage: Readonly<Record<LanguageCode, string>> = {
    de: 'de_DE',
    en: 'en_US',
    es: 'es_ES',
    fr: 'fr_FR',
    pt: 'pt_PT',
    tr: 'tr_TR',
  };

  private readonly meta: Meta = inject(Meta);
  private readonly title: Title = inject(Title);
  private readonly translate: TranslateService = inject(TranslateService);
  private readonly destroyRef: DestroyRef = inject(DestroyRef);
  private readonly document: Document = inject(DOCUMENT);

  public ngOnInit(): void {
    this.applyMetadata(this.translate.currentLang || this.translate.defaultLang || 'en');

    this.translate.onLangChange.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(({ lang }: { lang: string }) => {
      this.applyMetadata(lang);
    });
  }

  private applyMetadata(language: string): void {
    const lang = this.normalizeLanguage(language);
    const ogLocale = this.localeByLanguage[lang];
    const title = 'i18n-excel-manager | Angular Translation Tool';
    const description =
      'Effortless conversion between i18n JSON files and Excel for Angular and modern web projects with AI-powered translation.';
    const image = 'https://mariokreitz.github.io/i18n-ui/assets/images/png/logo.png';
    const url = 'https://mariokreitz.github.io/i18n-ui/';

    this.document.documentElement.lang = lang;
    this.ensureCanonical(url);
    this.title.setTitle(title);
    this.meta.updateTag({ name: 'description', content: description }, "name='description'");
    this.meta.updateTag({ name: 'robots', content: 'index, follow, max-image-preview:large' }, "name='robots'");

    // Open Graph
    this.meta.updateTag({ property: 'og:title', content: title }, "property='og:title'");
    this.meta.updateTag({ property: 'og:description', content: description }, "property='og:description'");
    this.meta.updateTag({ property: 'og:image', content: image }, "property='og:image'");
    this.meta.updateTag({ property: 'og:image:alt', content: 'i18n-excel-manager logo' }, "property='og:image:alt'");
    this.meta.updateTag({ property: 'og:url', content: url }, "property='og:url'");
    this.meta.updateTag({ property: 'og:site_name', content: 'i18n-excel-manager' }, "property='og:site_name'");
    this.meta.updateTag({ property: 'og:locale', content: ogLocale }, "property='og:locale'");
    this.meta.updateTag({ property: 'og:type', content: 'website' }, "property='og:type'");

    // Twitter Card
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' }, "name='twitter:card'");
    this.meta.updateTag({ name: 'twitter:title', content: title }, "name='twitter:title'");
    this.meta.updateTag({ name: 'twitter:description', content: description }, "name='twitter:description'");
    this.meta.updateTag({ name: 'twitter:image', content: image }, "name='twitter:image'");
    this.meta.updateTag({ name: 'twitter:url', content: url }, "name='twitter:url'");
  }

  private ensureCanonical(url: string): void {
    const existing = this.document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;

    if (existing) {
      existing.href = url;
      return;
    }

    const link: HTMLLinkElement = this.document.createElement('link');
    link.rel = 'canonical';
    link.href = url;
    this.document.head.appendChild(link);
  }

  private normalizeLanguage(language: string): LanguageCode {
    if (language in this.localeByLanguage) {
      return language as LanguageCode;
    }

    return 'en';
  }
}
