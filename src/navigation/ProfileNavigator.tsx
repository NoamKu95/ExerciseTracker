import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaView} from 'react-native-safe-area-context';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
// Components
import ProfileScreen from '../features/profile/ProfileScreen';
import HistoryScreen from '../features/history/HistoryScreen';
// UI
import {colors} from '../constants/ui/colors';
// Constants
import {ProfileScreens} from '../constants/screens';
import {tabBarStyle} from '../constants/ui/commonStyles';
import PastWorkoutDetailsScreen from '../features/past_workout/PastWorkoutDetails';
import SavedWorkoutsScreen from '../features/saved_workouts/SavedWorkouts';

const Stack = createStackNavigator();
const ProfileStack = ({navigation, route}) => {
  React.useLayoutEffect(() => {
    const tabHiddenRoutes = [ProfileScreens.WORKOUT_HISTORY];
    if (tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))) {
      navigation.setOptions({tabBarStyle: {display: 'none'}});
    } else {
      navigation.setOptions({
        tabBarStyle: [...tabBarStyle, {display: 'flex'}],
      });
    }
  }, [navigation, route]);

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
        <Stack.Screen
          name={ProfileScreens.PAST_WORKOUT_DETAILS}
          component={PastWorkoutDetailsScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={ProfileScreens.SAVED_WORKOUTS}
          component={SavedWorkoutsScreen}
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
