import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageSwitch } from '../language-switch/language-switch';
import { NavSocial } from '../navigation/nav-social/nav-social';

@Component({
  selector: 'app-header',
  imports: [NgOptimizedImage, NavSocial, LanguageSwitch, TranslatePipe],
  templateUrl: './header.html',
  styleUrl: './header.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
  private readonly router: Router = inject(Router);

  public reloadPage(): void {
    this.router.navigate(['/']);
  }
}
