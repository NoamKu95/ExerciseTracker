import {Gender, MeasureUnit} from '../../constants/enums';

export interface User {
  fullName: string;
  email: string;
  gender: Gender;
  measureUnit: MeasureUnit;
}

export interface UserCredentials {
  email: string;
  password: string;
}

export interface RegistrationObject {
  email: string;
  password: string;
  name: string;
  languageName: string;
}
