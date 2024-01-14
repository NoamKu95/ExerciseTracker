import {Translation} from './translations';

export const HE = 'he';

const Hebrew: Translation = {
  appName: 'trainTracker',
  tabs: {
    Home: 'בית',
    Exercise: 'אימון',
    Progress: 'התקדמות',
    Profile: 'פרופיל',
  },
  screens: {
    home: {
      title: '',
    },
    exercise: {
      title: '',
    },
    progress: {
      title: 'ההתקדמות שלי',
    },
    profile: {
      title: 'אזור אישי',
    },
  },
  bottomSheets: {
    exercise: {
      chooseBodyArea: 'בחירת אזור גוף:',
      chooseExercise: 'בחירת תרגיל:',
    },
    filtering: {
      filterByPeriod: 'סינון לפי תקופה:',
      filterByDates: 'סינון לפי תאריכים:',
      filterByExercise: 'סינון לפי סוג אימון:',
    },
    datePicker: {
      day: 'יום',
      month: 'חודש',
      year: 'שנה',
    },
  },
  modals: {
    saveWorkout: 'שמירת אימון',
    letsSaveWorkout: 'יאללה בואי נשמור את מבנה האימון הנוכחי!',
    findWorkoutAt:
      'האימון יופיע תחת ״התחלת אימון שמור״  בדף הבית וכן ברשימת האימונים השמורים בדף הפרופיל',
  },
  commonlyUsed: {
    actionButton: {
      save: 'שמירה',
    },
  },
  errors: {
    server: {
      apiError: '',
      badRequestError: '',
      forbiddenError: '',
      internalServerError: '',
      notFoundError: '',
      unauthorizedError: '',
    },
  },
};

export default Hebrew;
