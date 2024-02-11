export interface Translation {
  appName: string;
  tabs: {
    Home: string;
    Exercise: string;
    Progress: string;
    Profile: string;
  };
  screens: {
    splash: {
      title: string;
      subtitle: string;
      actionBtn: string;
    };
    register: {
      hey: string;
      welcome: string;
      someDetails: string;
      letsGo: string;
      name: string;
      email: string;
      password: string;
      dontWorry: string;
      haveAccount: string;
      loginHere: string;
    };
    onboarding: {
      title: string;
      subtitle: string;
      actionBtn: string;
    };
    login: {
      title: string;
      subtitle: string;
      login: string;
      forgotPassword: string;
      noAccountYet: string;
      registerHere: string;
    };
    forgotPassword: {
      screenTitle: string;
      didYouForget: string;
      dontWorry: string;
      email: string;
      checkInbox: string;
      sendPassword: string;
    };
    home: {
      title: string;
    };
    exercise: {
      title: string;
    };
    progress: {
      title: string;
    };
    profile: {
      title: string;
    };
    noInternet: {
      title: string;
      subtitle: string;
      stillNoConnection: string;
      btnAction: string;
    };
  };
  bottomSheets: {
    exercise: {
      chooseBodyArea: string;
      chooseExercise: string;
    };
    filtering: {
      filterByPeriod: string;
      filterByDates: string;
      filterByExercise: string;
      savedExercise: string;
      unsavedExercise: string;
    };
    datePicker: {
      day: string;
      month: string;
      year: string;
    };
  };
  modals: {
    saveWorkout: string;
    saveText1: string;
    saveText2: string;
    saveBtnText: string;
    removeWorkout: string;
    removeText1: string;
    removeText2: string;
    removeBtnText: string;
  };
  commonlyUsed: {
    actionButton: {
      save: string;
    };
  };
  times: {
    last7Days: string;
    last2Weeks: string;
    lastMonth: string;
  };
  errors: {
    genericError: string;
    initialization: string;
    server: {
      apiError: string;
      badRequestError: string;
      forbiddenError: string;
      internalServerError: string;
      notFoundError: string;
      unauthorizedError: string;
      tokenExpired: string;
    };
    validation: {
      invalidName: string;
      invalidEmail: string;
      invalidPassword: string;
      unmatchingPasswords: string;
    };
  };
}
