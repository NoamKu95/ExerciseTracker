export interface User {
  fullName: string;
  email: string;
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
