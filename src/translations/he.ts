import {Translation} from './translations';

const Hebrew: Translation = {
  appName: 'trainTracker',
  tabs: {
    home: 'בית',
    exercise: 'אימון',
    progress: 'התקדמות',
    profile: 'פרופיל',
  },
  screens: {
    splash: {
      title: 'השם של האפליקציה',
      subtitle: 'משפט מחץ כלשהו או סלוגן',
      actionBtn: 'בואו נתחיל',
    },
    register: {
      hey: 'היי!',
      welcome: 'וולקאם לאפליקציית האימונים החדשה שלך :)',
      someDetails: 'לפני שנתחיל נשמח לקבל ממך כמה פרטים קטנים:',
      letsGo: 'מילאתי, אפשר להמשיך',
      name: 'שם מלא',
      email: 'אימייל',
      password: 'סיסמה',
      dontWorry: 'אין מה לדאוג - לא נבלבל לך במוח עם מיילים שיווקיים מיותרים',
      haveAccount: 'כבר יש לך חשבון?',
      loginHere: 'יאללה להתחבר',
    },
    onboarding: {
      title: 'כיף להכיר אותך {{userName}}',
      subtitle: 'הנה בריף קצר על מה אפשר לעשות באפליקציה:',
      actionBtn: 'מגניב, בואו נתחיל',
    },
    login: {
      title: 'איזה כיף שחזרת!',
      subtitle: 'לוגין קטן ונאפשר לך לחזור לתעד את האימונים שלך :)',
      login: 'התחברות',
      forgotPassword: 'שכחתי סיסמה',
      noAccountYet: 'עדיין לא יצרת חשבון?',
      registerHere: 'עושים את זה פה',
    },
    forgotPassword: {
      screenTitle: 'איפוס סיסמה',
      didYouForget: 'ברחה לך הסיסמה מהראש?',
      dontWorry: 'אין מה לדאוג, אפשר בקלות ובמהירות לג׳נרט סיסמה זמנית חדשה',
      email: 'כתובת המייל איתה נרשמת',
      checkInbox: 'שלחנו! זה הזמן לגשת למייל ואז להתחבר עם הסיסמה הזמנית',
      sendPassword: 'שלחו לי סיסמה חדשה',
    },
    home: {
      btnAction: 'התחלת אימון חדש',
      didYouKnow: 'הידעת?',
      startedSavedWorkout: 'התחלת אימון שמור',
      activeWorkout: 'אימון פעיל',
      clickSaveAtTheEnd: 'בסיום האימון יש ללחוץ על כפתור השמירה.',
      weAutoSave:
        '(אבל לא לדאוג, מקסימום בסוף היום נסגור ונשמור את האימון אוטומטית עבורך)',
      greetings: {
        morning: 'בוקר מעולה',
        noon: 'צהריים נעימים',
        evening: 'ערב טוב',
        night: 'אחלה של לילה',
      },
      motivation: {
        morning: 'שתית קפה? אכלת תמר? זה הזמן לתת בראש!',
        noon: 'לא ניתן לעייפות של הלאנץ׳ לעצור אותנו!',
        evening: 'אין כמו לסגור את היום עם אימון מוצלח',
        night: 'חיית לילה של אימונים!',
      },
      emptyState: {
        noFunFacts:
          'עדיין לא תיעדת מספיק אימונים, אבל בקרוב מאוד נוכל להציג כאן עובדות טריוויה מפתיעות על ההתקדמות שלך!',
        noSavedWorkouts:
          'נראה שעוד לא יצרת אף אימון שמור... הוספת אימונים שמורים תאפשר לך להתחיל להתאמן עם התרגילים המועדפים עלייך בלחיצת כפתור :)',
      },
    },
    exercise: {
      title: '',
    },
    progress: {
      title: 'ההתקדמות שלי',
      subtitle:
        'הכי כיף ומדרבן לראות את הדרך שעברת! בחרי אימון מהרשימה כדי להציג את הפרוגרס שעשית לאורך הדרך מאז שהתחלת.',
      summaryCard: {
        title: 'הביצועים בקצרה',
        lastWeight: 'משקל אחרון',
        avgWeight: 'משקל ממוצע',
        maxWeight: 'משקל מקסימאלי',
      },
      graphCard: {
        title: 'גרף התקדמות',
        emptyState: 'לא נמצאו נתונים להצגה',
      },
    },
    profile: {
      title: 'אזור אישי',
      personalDetails: 'פרטים אישיים',
      firstName: 'שם פרטי',
      lastName: 'שם משפחה',
      gender: 'מגדר',
      male: 'זכר',
      female: 'נקבה',
      other: 'אחר',
      settings: 'הגדרות',
      language: 'שפה',
      measureUnit: 'יחידת מידה',
      contactUs: 'יצירת קשר',
      emailSubject: 'אפליקציית itnessTracker',
      emailBody: 'פנייה בנוגע לאפליקצייה...',
      deleteUser: 'מחיקת נתונים שמורים',
    },
    noInternet: {
      title: 'אופס, אין חיבור אינטרנט!',
      subtitle: 'נראה שאין למכשיר שלך חיבור אינטרנט כרגע',
      stillNoConnection: 'נראה שעדיין לא חזר האינטרנט.. נסה שוב בקרוב',
      btnAction: 'שננסה שוב?',
    },
  },
  bottomSheets: {
    exercises: {
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
  common: {
    kg: 'ק״ג',
    actionButton: {
      save: 'שמירה',
    },
    today: 'היום',
  },
  times: {
    last7Days: '7 ימים אחרונים',
    last2Weeks: 'שבועיים אחרונים',
    lastMonth: 'חודש אחרון',
    last30Days: 'חודש אחרון',
    last90Days: '3 חודשים אחרונים',
    last180Days: 'חצי שנה אחרונה',
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
    app: {
      cantOpenEmail: 'לא ניתן היה לשלוח את המייל',
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
