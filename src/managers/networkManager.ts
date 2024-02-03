import Axios from 'axios';
import store from '../store/store';
import envConfig from '../constants/config/config';
import {generalErrorHandler} from '../features/errorHandling/state/errorHandlingActions';

const axios = Axios.create();

axios.defaults.baseURL = envConfig.baseUrl;

// MARK: - Request
axios.interceptors.request.use(async config => {
  const token = store.getState().auth.userToken;
  config.headers.vendor = envConfig.vendor;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  config.params = {
    ...config.params,
    'api-version': envConfig.apiVersion,
  };

  return config;
});

// MARK: - Response
axios.interceptors.response.use(
  res => res,
  error => {
    store.dispatch(generalErrorHandler(error));
    throw error;
  },
);

export default axios;
