import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// Components
import TabItem from './components/TabItem';
import HomeScreen from '../features/home_page/HomePage';
import WorkoutScreen from '../features/WorkoutScreen';
import ProgressScreen from '../features/progress/ProgressScreen';
import ProfileScreen from '../features/ProfileScreen';
// Icons
import HomeIcon from '../assets/icons/HomeIcon';
import WorkoutIcon from '../assets/icons/WorkoutIcon';
import ProgressIcon from '../assets/icons/ProgressIcon';
import ProfileIcon from '../assets/icons/ProfileIcon';
// UI
import {colors} from '../constants/ui/colors';
import {spaces} from '../constants/ui/spaces';
import {shadowStyles} from '../constants/ui/shadows';
// Constants
import i18n from '../translations/i18n';
import {RootTabsParamList, TabsScreens} from '../constants/screens';

const Tab = createBottomTabNavigator<RootTabsParamList>();

const TabsNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={TabsScreens.PROGRESS}
      backBehavior="history"
      screenOptions={({}) => ({
        headerShown: false,
        tabBarStyle: [
          {
            paddingTop: spaces._16px,
            backgroundColor: colors.WHITE,
            height: 85,
          },
          shadowStyles.mediumShadow,
        ],
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
        component={WorkoutScreen}
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
        component={ProfileScreen}
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
