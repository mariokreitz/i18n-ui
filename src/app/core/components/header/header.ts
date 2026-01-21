import { LowerCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { SOCIAL_MEDIA_LINKS } from '../../constants/social-media-links.constant';
import { SocialMediaLink } from '../../interfaces';

@Component({
  selector: 'app-header',
  imports: [LowerCasePipe, FaIconComponent],
  templateUrl: './header.html',
  styleUrl: './header.css',
  host: { class: 'flex justify-between items-center' },
})
export class Header {
  public readonly SOCIAL_MEDIA_LINKS: SocialMediaLink[] = SOCIAL_MEDIA_LINKS;
}
