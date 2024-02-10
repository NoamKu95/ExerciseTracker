import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
// Constants
import {Screens, RootStackParamList} from '../constants/screens';
import {navigationRef} from './RootNavigation';
// Screens
import RegistrationStack from './RegistrationNavigator';
import LoginScreen from '../features/auth/LoginScreen';
import ForgotPasswordScreen from '../features/auth/ForgotPasswordScreen';
import OnboardingScreen from '../features/auth/OnboardingScreen';
import SplashScreen from '../features/auth/SplashScreen';
import NoInternetScreen from '../features/noInternet/NoInternetScreen';

const Stack = createStackNavigator<RootStackParamList>();
const AppNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName={Screens.SPLASH}>
        <Stack.Screen
          name={Screens.SPLASH}
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Screens.REGISTER}
          component={RegistrationStack}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Screens.ONBOARDING}
          component={OnboardingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Screens.LOGIN}
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Screens.FORGOT_PASSWORD}
          component={ForgotPasswordScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Screens.NO_INTERNET}
          component={NoInternetScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
