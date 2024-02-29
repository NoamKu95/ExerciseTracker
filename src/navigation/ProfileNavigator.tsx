import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaView} from 'react-native-safe-area-context';
// Components
import ProfileScreen from '../features/profile/ProfileScreen';
// UI
import {colors} from '../constants/ui/colors';
// Constants
import {ProfileScreens} from '../constants/screens';

const Stack = createStackNavigator();
const ProfileStack = () => {
  return (
    <SafeAreaView style={styles.bottomAreaView} edges={['left', 'right']}>
      <Stack.Navigator
        initialRouteName={ProfileScreens.PROFILE}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name={ProfileScreens.PROFILE}
          component={ProfileScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default ProfileStack;

const styles = StyleSheet.create({
  bottomAreaView: {
    flex: 1,
    backgroundColor: colors.BLACK,
  },
});
