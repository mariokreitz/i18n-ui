import { Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
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
})
export default class Home implements OnInit {
  private readonly meta: Meta = inject(Meta);
  private readonly title: Title = inject(Title);

  public ngOnInit(): void {
    const title = 'i18n-excel-manager | Angular Translation Tool';
    const description =
      'Effortless conversion between i18n JSON files and Excel for Angular and modern web projects with AI-powered translation.';
    const image = 'https://mariokreitz.github.io/i18n-ui/assets/images/png/logo.png';
    const url = 'https://mariokreitz.github.io/i18n-ui/';

    this.title.setTitle(title);

    this.meta.addTags([
      // Open Graph
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: image },
      { property: 'og:url', content: url },
      { property: 'og:type', content: 'website' },

      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
    ]);
  }
}
