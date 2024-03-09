export interface Translation {
  appName: string;
  tabs: {
    home: string;
    exercise: string;
    progress: string;
    profile: string;
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
      btnAction: string;
      didYouKnow: string;
      startedSavedWorkout: string;
      activeWorkout: string;
      clickSaveAtTheEnd: string;
      weAutoSave: string;
      greetings: {
        morning: string;
        noon: string;
        evening: string;
        night: string;
      };
      motivation: {
        morning: string;
        noon: string;
        evening: string;
        night: string;
      };
      emptyState: {
        noFunFacts: string;
        noSavedWorkouts: string;
      };
    };
    exercise: {
      title: string;
    };
    progress: {
      title: string;
      subtitle: string;
      summaryCard: {
        title: string;
        lastWeight: string;
        avgWeight: string;
        maxWeight: string;
      };
      graphCard: {
        title: string;
        emptyState: string;
      };
    };
    profile: {
      title: string;
      personalDetails: string;
      firstName: string;
      lastName: string;
      gender: string;
      male: string;
      female: string;
      other: string;
      settings: string;
      language: string;
      measureUnit: string;
      contactUs: string;
      emailSubject: string;
      emailBody: string;
      deleteUser: string;
    };
    workoutsHistory: {
      title: string;
      emptyStateText: string;
    };
    noInternet: {
      title: string;
      subtitle: string;
      stillNoConnection: string;
      btnAction: string;
    };
  };
  bottomSheets: {
    exercises: {
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
  common: {
    kg: string;
    actionButton: {
      save: string;
    };
    today: string;
    dayTimes: {
      morning: string;
      noon: string;
      evening: string;
      night: string;
    };
  };
  times: {
    last7Days: string;
    last2Weeks: string;
    lastMonth: string;
    last30Days: string;
    last90Days: string;
    last180Days: string;
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
    app: {
      cantOpenEmail: string;
    };
    validation: {
      invalidName: string;
      invalidEmail: string;
      invalidPassword: string;
      unmatchingPasswords: string;
    };
  };
}
