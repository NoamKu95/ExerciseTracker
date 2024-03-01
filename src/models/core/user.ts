import {Gender} from '../../constants/enums';

export interface User {
  fullName: string;
  email: string;
  gender: Gender;
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
