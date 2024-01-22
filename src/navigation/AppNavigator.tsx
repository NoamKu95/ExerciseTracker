import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../features/home_page/HomePage';
import {Screens, RootStackParamList} from '../constants/screens';
import RegistrationStack from './RegistrationNavigator';

const Stack = createStackNavigator<RootStackParamList>();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Screens.REGISTER}>
        <Stack.Screen
          name={Screens.REGISTER}
          component={RegistrationStack}
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
