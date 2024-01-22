import {Translation} from './translations';

const Hebrew: Translation = {
  appName: 'trainTracker',
  tabs: {
    Home: 'בית',
    Exercise: 'אימון',
    Progress: 'התקדמות',
    Profile: 'פרופיל',
  },
  screens: {
    register: {
      hey: 'היי!',
      welcome: 'וולקאם לאפליקציית האימונים החדשה שלך :)',
      someDetails: 'לפני שנתחיל נשמח לקבל ממך כמה פרטים קטנים:',
      letsGo: 'מילאתי, אפשר להמשיך',
      name: 'שם מלא',
      email: 'אימייל',
      password: 'סיסמה',
      repassword: 'סיסמה בשנית',
      dontWorry: 'אין מה לדאוג - לא נבלבל לך במוח עם מיילים שיווקיים מיותרים',
    },
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
      savedExercise: 'אימון שמור',
      unsavedExercise: 'אימון שאינו שמור',
    },
    datePicker: {
      day: 'יום',
      month: 'חודש',
      year: 'שנה',
    },
  },
  modals: {
    saveWorkout: 'שמירת אימון',
    saveText1: 'יאללה בואי נשמור את מבנה האימון הנוכחי!',
    saveText2:
      'האימון יופיע תחת ״התחלת אימון שמור״  בדף הבית וכן ברשימת האימונים השמורים בדף הפרופיל',
    saveBtnText: 'שמירה',
    removeWorkout: 'ביטול שמירת אימון',
    removeText1:
      'לחיצה על כפתור ההסרה תמחק את האימון מרשימת ״האימונים השמורים״',
    removeText2:
      'עם זאת, תיעודי האימון שהספקת לבצע ימשיכו להופיע בדף היסטוריית האימונים',
    removeBtnText: 'הסרת אימון',
  },
  commonlyUsed: {
    actionButton: {
      save: 'שמירה',
    },
  },
  times: {
    last7Days: '7 ימים אחרונים',
    last2Weeks: 'שבועיים אחרונים',
    lastMonth: 'חודש אחרון',
  },
  errors: {
    genericError: '',
    server: {
      apiError: '',
      badRequestError: '',
      forbiddenError: '',
      internalServerError: '',
      notFoundError: '',
      unauthorizedError: '',
    },
    validation: {
      invalidName: 'שם לא תקין',
      invalidEmail: 'כתובת אימייל לא תקינה',
      invalidPassword: 'סיסמה לא תקינה',
      unmatchingPasswords: 'סיסמה לא תואמת',
    },
  },
};

export default Hebrew;
