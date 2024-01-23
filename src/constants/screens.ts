export type RootStackParamList = {
  Splash: undefined;
  Home: undefined;
  Register: undefined;
  Login: undefined;
  ForgotPassword: undefined;
  Onboarding: undefined;
  Tabs: undefined;
};

export const Screens: {
  HOMEPAGE: keyof RootStackParamList;
  SPLASH: keyof RootStackParamList;
  REGISTER: keyof RootStackParamList;
  LOGIN: keyof RootStackParamList;
  FORGOT_PASSWORD: keyof RootStackParamList;
  ONBOARDING: keyof RootStackParamList;
  TABS: keyof RootStackParamList;
} = {
  HOMEPAGE: 'Home',
  SPLASH: 'Splash',
  REGISTER: 'Register',
  LOGIN: 'Login',
  FORGOT_PASSWORD: 'ForgotPassword',
  ONBOARDING: 'Onboarding',
  TABS: 'Tabs',
};
