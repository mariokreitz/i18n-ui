import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faNpm } from '@fortawesome/free-brands-svg-icons/faNpm';
import { SocialMediaLink } from '../interfaces';

export const GITHUB_PROFILE_URL = 'https://github.com/mariokreitz';

export const SOCIAL_MEDIA_LINKS: SocialMediaLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/mariokreitz/i18n-excel-manager',
    faIcon: faGithub,
  },
  {
    name: 'NPM',
    url: 'https://www.npmjs.com/package/i18n-excel-manager',
    faIcon: faNpm,
  },
];
