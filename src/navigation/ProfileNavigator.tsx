import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaView} from 'react-native-safe-area-context';
// Components
import ProfileScreen from '../features/profile/ProfileScreen';
import HistoryScreen from '../features/history/HistoryScreen';
// UI
import {colors} from '../constants/ui/colors';
// Constants
import {ProfileScreens} from '../constants/screens';

const Stack = createStackNavigator();
const ProfileStack = () => {
  return (
    <SafeAreaView style={styles.bottomAreaView} edges={['left', 'right']}>
      <Stack.Navigator
        initialRouteName={ProfileScreens.MAIN_PROFILE}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name={ProfileScreens.MAIN_PROFILE}
          component={ProfileScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={ProfileScreens.WORKOUT_HISTORY}
          component={HistoryScreen}
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
