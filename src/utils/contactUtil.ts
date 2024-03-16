import {Linking} from 'react-native';
// Constants
import i18n from '../translations/i18n';
// Models
import {AppErrorTypes} from '../models/error';
// Redux
import {useAppDispatch} from '../store/store';
import {setError} from '../features/errorHandling/state/errorHandlingSlice';
// Managers
import {logger} from '../managers/loggingManager';

export const openEmail = () => {
  const subject = i18n.t('screens.profile.emailSubject');
  const body = i18n.t('screens.profile.emailBody');

  const recipientEmail = 'noamkurtzer@gmail.com';

  const url = `mailto:${recipientEmail}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;

  Linking.openURL(url).catch(err => {
    const dispatch = useAppDispatch();

    dispatch(
      setError({
        type: AppErrorTypes.FAILED_TO_OPEN_MAIL,
        message: i18n.t('errors.app.cantOpenEmail'),
      }),
    );
    logger.error(`'Error opening email app: ${err}`);
  });
};
