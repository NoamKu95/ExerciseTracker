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
  Main_Profile: undefined;
  Workout_History: undefined;
  Past_Workout_Details: undefined;
  Saved_Workouts: undefined;
  Edit_Saved_Workout: undefined;
};
export const ProfileScreens: {
  MAIN_PROFILE: keyof ProfileStackParamList;
  WORKOUT_HISTORY: keyof ProfileStackParamList;
  PAST_WORKOUT_DETAILS: {workoutID: string};
  SAVED_WORKOUTS: keyof ProfileStackParamList;
  EDIT_SAVED_WORKOUT: {workoutID: string};
} = {
  MAIN_PROFILE: 'Main_Profile',
  WORKOUT_HISTORY: 'Workout_History',
  PAST_WORKOUT_DETAILS: 'Past_Workout_Details',
  SAVED_WORKOUTS: 'Saved_Workouts',
  EDIT_SAVED_WORKOUT: 'Edit_Saved_Workout',
};
