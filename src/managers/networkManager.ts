import Axios from 'axios';
// Constants
import envConfig from '../constants/config/config';
// Models
import {ServerErrorTypes} from '../models/error';
// Redux
import store from '../store/store';
import {refreshAccessToken} from '../features/auth/state/authActions';
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
  async response => {
    const originalRequest = response.config;
    if (response.data.responseDescription === ServerErrorTypes.TOKEN_EXPIRED) {
      try {
        // Fetch new token & save to store and keychain
        await store.dispatch(refreshAccessToken());

        // Extract the new access token from the action payload
        const newAccessToken = store.getState().auth.userToken;
        if (!newAccessToken) {
          throw new Error();
        }

        // Update the header for the original request
        axios.defaults.headers.Authorization = `Bearer ${newAccessToken}`;
        // Retry the original request with the new token
        return axios(originalRequest);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }

    return response;
  },
  error => {
    store.dispatch(generalErrorHandler(error));
    return Promise.reject(error);
  },
);

export default axios;
