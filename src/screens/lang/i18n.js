import {lang} from '@assets/language/i18n';
import I18n, {getLanguages} from 'react-native-i18n';
import en from './en';
import vi from './vi';

I18n.fallbacks = false;
I18n.locale = 'en';
I18n.translations = {
  en,
  vi,
};

export {I18n, getLanguages};
export const getLang = () => getLanguages();
export const layLang = (key) => I18n.t(key);
export const setLang = (value) => {
  console.log('SET lang', value);
  I18n.locale = value;
};
