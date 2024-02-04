import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaView} from 'react-native-safe-area-context';
// Components
import RegistrationScreen from '../features/RegistrationScreen';
// UI
import {colors} from '../constants/ui/colors';
// Constants
import {RegistrationScreens} from '../constants/screens';

const Stack = createStackNavigator();
const RegistrationStack = () => {
  return (
    <SafeAreaView style={styles.bottomAreaView} edges={['left', 'right']}>
      <Stack.Navigator
        initialRouteName={RegistrationScreens.REGISTRATION_DETAILS}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name={RegistrationScreens.REGISTRATION_DETAILS}
          component={RegistrationScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default RegistrationStack;

const styles = StyleSheet.create({
  bottomAreaView: {
    flex: 1,
    backgroundColor: colors.BLACK,
  },
});
