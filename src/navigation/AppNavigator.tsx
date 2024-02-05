import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
// Constants
import {Screens, RootStackParamList} from '../constants/screens';
// Screens
import RegistrationStack from './RegistrationNavigator';
import LoginScreen from '../features/auth/LoginScreen';
import HomeScreen from '../features/home_page/HomePage';

const Stack = createStackNavigator<RootStackParamList>();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Screens.LOGIN}>
        <Stack.Screen
          name={Screens.REGISTER}
          component={RegistrationStack}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Screens.LOGIN}
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Screens.HOMEPAGE}
          component={HomeScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
