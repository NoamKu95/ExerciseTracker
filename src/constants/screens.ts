export type RootStackParamList = {
  Splash: undefined;
  Register: undefined;
  Onboarding: undefined;
  Login: undefined;
  ForgotPassword: undefined;
  Tabs: undefined;
  NoInternet: undefined;
};

export const Screens: {
  SPLASH: keyof RootStackParamList;
  REGISTER: keyof RootStackParamList;
  ONBOARDING: keyof RootStackParamList;
  LOGIN: keyof RootStackParamList;
  FORGOT_PASSWORD: keyof RootStackParamList;
  TABS: keyof RootStackParamList;
  NO_INTERNET: keyof RootStackParamList;
} = {
  SPLASH: 'Splash',
  REGISTER: 'Register',
  ONBOARDING: 'Onboarding',
  LOGIN: 'Login',
  FORGOT_PASSWORD: 'ForgotPassword',
  TABS: 'Tabs',
  NO_INTERNET: 'NoInternet',
};

// REGISTRATION STACK
export type RegistrationStackParamList = {
  RegistrationDetails: undefined;
  Onboarding: undefined;
};

export const RegistrationScreens: {
  REGISTRATION_DETAILS: keyof RegistrationStackParamList;
} = {
  REGISTRATION_DETAILS: 'RegistrationDetails',
};

// TABS
export type RootTabsParamList = {
  Home: undefined;
  Workout: undefined;
  Progress: undefined;
  Profile: undefined;
};
export const TabsScreens: {
  HOME: keyof RootTabsParamList;
  WORKOUT: keyof RootTabsParamList;
  PROGRESS: keyof RootTabsParamList;
  PROFILE: keyof RootTabsParamList;
} = {
  HOME: 'Home',
  WORKOUT: 'Workout',
  PROGRESS: 'Progress',
  PROFILE: 'Profile',
};

// PROFILE STACK
export type ProfileStackParamList = {
  Profile: undefined;
};
export const ProfileScreens: {
  PROFILE: keyof ProfileStackParamList;
} = {
  PROFILE: 'Profile',
};
