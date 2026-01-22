import { LowerCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { SOCIAL_MEDIA_LINKS } from '../../../constants/social-media-links.constant';
import { SocialMediaLink } from '../../../interfaces';

@Component({
  selector: 'app-nav-social',
  imports: [FaIconComponent, LowerCasePipe],
  templateUrl: './nav-social.html',
  styleUrl: './nav-social.css',
})
export class NavSocial {
  public readonly SOCIAL_MEDIA_LINKS: SocialMediaLink[] = SOCIAL_MEDIA_LINKS;
}
