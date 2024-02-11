import {createAsyncThunk} from '@reduxjs/toolkit';
import NetInfo from '@react-native-community/netinfo';
// Constants
import i18n from '../../../translations/i18n';
import {Screens} from '../../../constants/screens';
// Models
import {
  User,
  UserCredentials,
  RegistrationObject,
} from '../../../models/core/user';
import {AppErrorTypes} from '../../../models/error';
// Redux
import {
  registerRepo,
  loginRepo,
  refreshAccessTokenRepo,
  loginWithTokenRepo,
  sendNewPasswordRepo,
} from '../../../repo/authRepo';
import {setError} from '../../errorHandling/state/errorHandlingSlice';
// Navigation
import {navigate} from '../../../navigation/RootNavigation';
// Managers
import {KeyChainKeys, getFromKeychain} from '../../../managers/keychainManager';

export enum AppInitReturnType {
  NOT_REGISTERED,
  LOGIN_REQUIRED,
  USER_VERIFIED,
}

export const appInit = createAsyncThunk<
  void,
  {onAppIsReady: (state: AppInitReturnType) => void}
>('app/init', async ({onAppIsReady}, thunkAPI) => {
  try {
    registerNetworkConnectionListener();

    // TODO: remove when BE available
    onAppIsReady(AppInitReturnType.NOT_REGISTERED);
    return;

    const token = await getFromKeychain(KeyChainKeys.ACCESS_TOKEN);

    if (!token) {
      onAppIsReady(AppInitReturnType.NOT_REGISTERED);
      return;
    }

    await thunkAPI
      .dispatch(loginUserViaToken(token))
      .unwrap()
      .then(() => onAppIsReady(AppInitReturnType.USER_VERIFIED))
      .catch(() => onAppIsReady(AppInitReturnType.LOGIN_REQUIRED));

    return;
  } catch (error) {
    thunkAPI.dispatch(
      setError({
        type: AppErrorTypes.INITIALIZATION,
        message: i18n.t('errors.initialization'),
      }),
    );
    throw error;
  }
});

const registerNetworkConnectionListener = () => {
  NetInfo.addEventListener(listener => {
    if (!listener.isConnected) {
      navigate(Screens.NO_INTERNET);
    }
  });
};

// MARK: - Register
export const registerUser = createAsyncThunk<void, RegistrationObject>(
  'auth/registerUser',
  async registrationObject => {
    try {
      return await registerRepo(registrationObject);
    } catch (error) {
      throw error;
    }
  },
);

// MARK: - Login
export const loginUser = createAsyncThunk<
  {user: User; accessToken: string},
  UserCredentials
>('auth/loginUser', async credentials => {
  try {
    return await loginRepo(credentials);
  } catch (error) {
    throw error;
  }
});

export const loginUserViaToken = createAsyncThunk<User, string>(
  'auth/loginWithToken',
  async accessToken => {
    try {
      return await loginWithTokenRepo(accessToken);
    } catch (error) {
      throw error;
    }
  },
);

// MARK: - Forgot Password
export const sendNewPassword = createAsyncThunk<void, string>(
  'auth/forgotPassword',
  async email => {
    try {
      return await sendNewPasswordRepo(email);
    } catch (error) {
      throw error;
    }
  },
);

// MARK: - Refresh Token
export const refreshAccessToken = createAsyncThunk<string, void>(
  'auth/refreshAccessToken',
  async () => {
    try {
      return await refreshAccessTokenRepo();
    } catch (error) {
      throw error;
    }
  },
);
