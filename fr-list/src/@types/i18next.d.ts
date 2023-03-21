import 'i18next';

import localeES from 'config/locales/es/translation.json';
import localeEN from 'config/locales/en/translation.json';

declare module 'i18next' {
  interface CustomTypeOptions {
    returnNull: false;
    defaultNS: 'localeES';
    returnEmptyString: false;
    resources: {
      localeES: typeof localeES.translation;
      localeEN: typeof localeEN.translation;
    };
  }
}
