import {AxiosError} from 'axios';

export enum ServerErrorTypes {
  BAD_REQUEST_ERROR = 'BadRequestError',
  INTERNAL_SERVER_ERROR = 'InternalServerError',
  FORBIDDEN_ERROR = 'ForbiddenError',
  API_ERROR = 'APIError',
  NOT_FOUND_ERROR = 'NotFoundError',
  UNAUTHORIZED_ERROR = 'UnauthorizedError',
}

export enum AppErrorTypes {
  NETWORK_ERROR = 'NetworkError,',
}

export interface ErrorData {
  type: ServerErrorTypes;
  statusCode: number;
  errorToDeveloper?: string;
}

export interface Error extends AxiosError<ErrorData> {}
