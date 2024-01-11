import {HE} from '../translations/he';
// import {EN} from '../translations/en';
import {FlagIsrael, FlagAmerica} from './ui/images';

export type SupportedLanguages = typeof HE; //| typeof EN;

export interface Language {
  code: SupportedLanguages;
  name: string;
  flag: string;
}

export const languages: Language[] = [
  // {code: EN, name: 'English', flag: FlagAmerica},
  {code: HE, name: 'עברית', flag: FlagIsrael},
];
