import {ServerErrorTypes} from '../models/error';
import i18n from '../translations/i18n';

export const serverErrorMapping = {
  [ServerErrorTypes.API_ERROR]: i18n.t('errors.server.apiError'),
  [ServerErrorTypes.BAD_REQUEST_ERROR]: i18n.t('errors.server.badRequestError'),
  [ServerErrorTypes.FORBIDDEN_ERROR]: i18n.t('errors.server.forbiddenError'),
  [ServerErrorTypes.INTERNAL_SERVER_ERROR]: i18n.t(
    'errors.server.internalServerError',
  ),
  [ServerErrorTypes.NOT_FOUND_ERROR]: i18n.t('errors.server.notFoundError'),
  [ServerErrorTypes.UNAUTHORIZED_ERROR]: i18n.t(
    'errors.server.unauthorizedError',
  ),
};
