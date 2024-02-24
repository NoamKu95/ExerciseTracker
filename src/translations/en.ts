import {Translation} from './translations';

export const EN = 'en';

const English: Translation = {
  appName: 'trainTracker',
  tabs: {
    home: 'Home',
    exercise: 'Exercise',
    progress: 'Progress',
    profile: 'Profile',
  },
  screens: {
    splash: {
      title: 'The name of the app',
      subtitle: 'Some catchphrase or slogan',
      actionBtn: "Let's get started",
    },
    register: {
      hey: 'Hey!',
      welcome: 'Welcome to your new exercising app :)',
      someDetails: "Before we begin we'd like to get a few tiny details:",
      letsGo: "Done, Let's Go",
      name: 'Full name',
      email: 'Email',
      password: 'Password',
      dontWorry: "Don't worry, we won't send you unnecessary marketing emails",
      haveAccount: 'Already have an account?',
      loginHere: "Let's Login",
    },
    onboarding: {
      title: 'Nice to meet you ${userName}',
      subtitle: 'Here is a brief about what you can do in the app:',
      actionBtn: "Cool, Let's Go",
    },
    login: {
      title: 'Good to see you again!',
      subtitle: "A quick login and we'll let you dive right back in",
      login: 'Login',
      forgotPassword: 'Forgot password',
      noAccountYet: "Still don't have an account?",
      registerHere: 'Register here',
    },
    forgotPassword: {
      screenTitle: 'Reset password',
      didYouForget: "Can't seem to remember your password?",
      dontWorry:
        'No need to worry, you can quickly generate a new temporary password',
      email: 'The email address you registered with',
      checkInbox:
        'Mail sent! Time to head over to your inbox & then login with the new password',
      sendPassword: 'Send me a new password',
    },
    home: {
      btnAction: 'Start new workout',
      didYouKnow: 'Did you know?',
      startedSavedWorkout: 'Start a saved workout',
      activeWorkout: 'Workout in progress',
      clickSaveAtTheEnd: 'Press the save button at the end of the workout',
      weAutoSave:
        "(but don't worry if you don't - we'll automatically close and save the workout for you at the end of the day)",
      greetings: {
        morning: 'Excellent morning',
        noon: 'Great noon',
        evening: 'Good evening',
        night: 'Awesome night',
      },
      motivation: {
        morning: 'Drank coffee? Ate a Date? Time to workout!',
        noon: "Don't give in to the tiredness of lunch time!",
        evening: 'Nothing like finishing a day with a great workout',
        night: 'Night owls workouts!',
      },
      emptyState: {
        noFunFacts:
          "You haven't recorded enough workouts, but soon we'll be able to display some surprising trivia facts here about your progress!",
        noSavedWorkouts:
          "Seems like you haven't created any saved workout yet.. Adding saved workouts would allow you to start working out with your favorite exercises at a press of a button :)",
      },
    },
    exercise: {
      title: '',
    },
    progress: {
      title: 'My progress',
    },
    profile: {
      title: 'Profile',
    },
    noInternet: {
      title: 'Oops.. No Internet!',
      subtitle:
        'Seems like your device does not have an internet connection at the moment',
      stillNoConnection:
        'We still cannot access the internet.. try again shortly',
      btnAction: "Let's try again",
    },
  },
  bottomSheets: {
    exercise: {
      chooseBodyArea: 'Choose body area:',
      chooseExercise: 'Choose exercise:',
    },
    filtering: {
      filterByPeriod: 'Filter by period:',
      filterByDates: 'Filter by dates:',
      filterByExercise: 'Filter by exercise:',
      savedExercise: 'Saved exercise',
      unsavedExercise: 'Unsaved exercise',
    },
    datePicker: {
      day: 'Day',
      month: 'Month',
      year: 'Year',
    },
  },
  modals: {
    saveWorkout: 'Save workout',
    saveText1: "Let's save the stracture of the current workout!",
    saveText2:
      "The exercise will appear under 'Start saved workout' in the homepage as well as in the list of saved workouts in your profile",
    saveBtnText: 'Save',
    removeWorkout: 'Cancel saving the workout',
    removeText1:
      "Pressing the remove button will delete the workout from your 'Saved workouts' list",
    removeText2:
      "However, records of this workout that you've already done will continue to appear in your workout history",
    removeBtnText: 'Remove workout',
  },
  commonlyUsed: {
    actionButton: {
      save: 'Save',
    },
  },
  times: {
    last7Days: 'Last 7 days',
    last2Weeks: 'Last 14 days',
    lastMonth: 'Last 30 days',
  },
  errors: {
    genericError: '',
    initialization: '',
    server: {
      apiError: '',
      badRequestError: '',
      forbiddenError: '',
      internalServerError: '',
      notFoundError: '',
      unauthorizedError: '',
      tokenExpired: '',
    },
    validation: {
      invalidName: '',
      invalidEmail: '',
      invalidPassword: '',
      unmatchingPasswords: '',
    },
  },
};

export default English;
