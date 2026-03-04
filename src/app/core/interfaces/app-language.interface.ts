import { registerLocaleData } from '@angular/common';

export type LanguageCode = 'de' | 'en' | 'fr' | 'es' | 'pt' | 'tr';

export type LocaleData = [Parameters<typeof registerLocaleData>[0], Parameters<typeof registerLocaleData>[2]];
