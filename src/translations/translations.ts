export interface Translation {
  appName: string;
  tabs: {
    Home: string;
    Exercise: string;
    Progress: string;
    Profile: string;
  };
  screens: {
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
    };
    datePicker: {
      day: string;
      month: string;
      year: string;
    };
  };
  modals: {
    saveWorkout: string;
    letsSaveWorkout: string;
    findWorkoutAt: string;
  };
  commonlyUsed: {
    actionButton: {
      save: string;
    };
  };
  errors: {
    server: {
      apiError: string;
      badRequestError: string;
      forbiddenError: string;
      internalServerError: string;
      notFoundError: string;
      unauthorizedError: string;
    };
  };
}
