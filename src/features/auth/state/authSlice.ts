import {PayloadAction, createSlice} from '@reduxjs/toolkit';
// Constants
import i18n, {
  LanguageType,
  getLanguageType,
  isRightToLeft,
} from '../../../translations/i18n';
// Models
import {User} from '../../../models/core/user';
// Redux
import {
  loginUser,
  refreshAccessToken,
  registerUser,
  sendNewPassword,
} from './authActions';
import {mockUser} from '../../../mockData/userMock';

export interface AuthState {
  isRTL: boolean;
  language: LanguageType;
  isLoading: boolean;
  isAuthenticated: boolean;
  user: User | null;
  userToken: string | null;
}

const initialState: AuthState = {
  isRTL: true,
  language: getLanguageType(i18n.locale),
  isLoading: false,
  isAuthenticated: false,
  user: mockUser, //null,
  userToken: null,
};

export const AuthSlice = createSlice({
  name: 'AuthSlice',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<LanguageType>) => {
      state.language = action.payload;
      i18n.locale = action.payload;
      state.isRTL = isRightToLeft(action.payload);
    },
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
  extraReducers: builder => {
    builder
      // MARK: - Register
      .addCase(registerUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(registerUser.rejected, state => {
        state.isLoading = false;
      })
      .addCase(registerUser.fulfilled, state => {
        state.isLoading = false;
      })

      // MARK: - Login
      .addCase(loginUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(loginUser.rejected, state => {
        state.isLoading = false;
      })
      .addCase(
        loginUser.fulfilled,
        (state, action: PayloadAction<{user: User; accessToken: string}>) => {
          state.isLoading = false;
          state.user = action.payload.user;
          state.userToken = action.payload.accessToken;
        },
      )

      // MARK: - Forgot Password
      .addCase(sendNewPassword.pending, state => {
        state.isRTL = true;
      })
      .addCase(sendNewPassword.rejected, state => {
        state.isRTL = false;
      })
      .addCase(sendNewPassword.fulfilled, state => {
        state.isRTL = false;
      })

      // MARK: - Refresh Token
      .addCase(refreshAccessToken.pending, state => {
        state.isLoading = true;
      })
      .addCase(refreshAccessToken.rejected, state => {
        state.isLoading = false;
      })
      .addCase(
        refreshAccessToken.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.isLoading = false;
          state.userToken = action.payload;
        },
      );
  },
});

export const {setLanguage, login, logout} = AuthSlice.actions;
