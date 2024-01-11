import i18n from '../../../translations/i18n';
import {setError} from './errorHandlingSlice';
import {serverErrorMapping} from '../../../constants/errorMapping';
import {Error} from '../../../models/error';
import {ServerErrorTypes} from '../../../models/error';

export const generalErrorHandler = (error: Error) => {
  if (error.response?.data) {
    const errorType = error.response.data.type;
    return setError({
      type: errorType,
      message: serverErrorMapping[errorType] || i18n.t('errors.generic'),
    });
  } else {
    return setError({
      type: ServerErrorTypes.INTERNAL_SERVER_ERROR,
      message: i18n.t('errors.generic'),
    });
  }
};
