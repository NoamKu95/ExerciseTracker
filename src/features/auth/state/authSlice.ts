import {createSlice} from '@reduxjs/toolkit';
import {HE} from '../../../translations/he';
import {SupportedLanguages} from '../../../constants/languages';

export interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  language: SupportedLanguages;
  isRTL: boolean;
  //   user: User | null;
  token: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  isLoading: false,
  language: HE,
  isRTL: true,
  //   user: null,
  token: null,
};

export const AuthSlice = createSlice({
  name: 'AuthSlice',
  initialState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const {login, logout} = AuthSlice.actions;
