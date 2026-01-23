import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FaIconComponent, IconDefinition } from '@fortawesome/angular-fontawesome';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons/faExternalLink';
import { TranslatePipe } from '@ngx-translate/core';
import { GITHUB_LICENSE_URL, GITHUB_PROFILE_URL, GITHUB_QUICK_LINKS } from '../../constants';
import { SocialMediaLink } from '../../interfaces';

@Component({
  selector: 'app-footer',
  imports: [FaIconComponent, TranslatePipe],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  public readonly githubQuickLinks: SocialMediaLink[] = GITHUB_QUICK_LINKS;

  public readonly githubProfileUrl: string = GITHUB_PROFILE_URL;
  public readonly githubLicenseUrl: string = GITHUB_LICENSE_URL;

  public readonly faExt: IconDefinition = faExternalLink;
}
