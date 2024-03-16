import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// Components
import TabItem from './components/TabItem';
import HomeScreen from '../features/home_page/HomePage';
import ActiveWorkoutScreen from '../features/workout/WorkoutScreen';
import ProgressScreen from '../features/progress/ProgressScreen';
import ProfileStack from './ProfileNavigator';
// Icons
import HomeIcon from '../assets/icons/HomeIcon';
import WorkoutIcon from '../assets/icons/WorkoutIcon';
import ProgressIcon from '../assets/icons/ProgressIcon';
import ProfileIcon from '../assets/icons/ProfileIcon';
// UI
// Constants
import i18n from '../translations/i18n';
import {RootTabsParamList, TabsScreens} from '../constants/screens';
import {tabBarStyle} from '../constants/ui/commonStyles';

const Tab = createBottomTabNavigator<RootTabsParamList>();

const TabsNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={TabsScreens.PROFILE}
      backBehavior="history"
      screenOptions={({}) => ({
        headerShown: false,
        tabBarStyle: [...tabBarStyle],
        tabBarShowLabel: false,
      })}>
      <Tab.Screen
        name={TabsScreens.HOME}
        component={HomeScreen}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused}) => (
            <TabItem
              text={i18n.t('tabs.home')}
              icon={<HomeIcon isFocused={focused} />}
              isFocused={focused}
            />
          ),
        }}
      />
      <Tab.Screen
        name={TabsScreens.WORKOUT}
        component={ActiveWorkoutScreen}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused}) => (
            <TabItem
              text={i18n.t('tabs.exercise')}
              icon={<WorkoutIcon isFocused={focused} />}
              isFocused={focused}
            />
          ),
        }}
      />
      <Tab.Screen
        name={TabsScreens.PROGRESS}
        component={ProgressScreen}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused}) => (
            <TabItem
              text={i18n.t('tabs.progress')}
              icon={<ProgressIcon isFocused={focused} />}
              isFocused={focused}
            />
          ),
        }}
      />
      <Tab.Screen
        name={TabsScreens.PROFILE}
        component={ProfileStack}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused}) => (
            <TabItem
              text={i18n.t('tabs.profile')}
              icon={<ProfileIcon isFocused={focused} />}
              isFocused={focused}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabsNavigator;
