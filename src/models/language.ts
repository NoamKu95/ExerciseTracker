export enum LanguageType {
  English = 'en',
  Hebrew = 'he',
}

export interface Language {
  code: LanguageType;
  name: string;
  flag: string;
}

export enum Hebrew {
  WI = 'wi',
  IW = 'iw',
  HE = 'he',
  HE_IL = 'he-IL',
}
