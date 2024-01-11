import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Screens, RootStackParamList} from '../constants/screens';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../features/home_page/HomePage';

const Stack = createStackNavigator<RootStackParamList>();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Screens.HOMEPAGE}>
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
