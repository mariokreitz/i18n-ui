import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageSwitch } from '../language-switch/language-switch';
import { NavSocial } from '../navigation/nav-social/nav-social';

@Component({
  selector: 'app-header',
  imports: [NgOptimizedImage, NavSocial, LanguageSwitch, TranslatePipe],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  public reloadPage(): void {
    window.location.reload();
  }
}
