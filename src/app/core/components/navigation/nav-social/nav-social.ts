import { Component } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { TranslatePipe } from '@ngx-translate/core';
import { SOCIAL_MEDIA_LINKS } from '../../../constants';
import { SocialMediaLink } from '../../../interfaces';

@Component({
  selector: 'app-nav-social',
  imports: [FaIconComponent, TranslatePipe],
  templateUrl: './nav-social.html',
  styleUrl: './nav-social.css',
})
export class NavSocial {
  public readonly SOCIAL_MEDIA_LINKS: SocialMediaLink[] = SOCIAL_MEDIA_LINKS;
}
