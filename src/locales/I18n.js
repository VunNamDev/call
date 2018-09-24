import I18n from 'react-native-i18n';
import RNLanguages from 'react-native-languages';
import * as locale from '.';

I18n.fallbacks = true;
I18n.locale = RNLanguages.language;

I18n.translations = locale;
RNLanguages.addEventListener('change', ({ language, languages }) => {
  I18n.locale = language;

  I18n.translations = locale;
});
export default I18n;
