import {PayloadAction, createSlice} from '@reduxjs/toolkit';
// Constants
import {SupportedLanguages} from '../../../constants/languages';
import i18n, {HE} from '../../../translations/i18n';
// Utils
import isRightToLeft from '../../../utils/langDirection';

export interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  language: SupportedLanguages;
  isRTL: boolean;
}

const initialState: AuthState = {
  isAuthenticated: false,
  isLoading: false,
  language: HE,
  isRTL: true,
};

export const AuthSlice = createSlice({
  name: 'AuthSlice',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<SupportedLanguages>) => {
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
});

export const {setLanguage, login, logout} = AuthSlice.actions;
