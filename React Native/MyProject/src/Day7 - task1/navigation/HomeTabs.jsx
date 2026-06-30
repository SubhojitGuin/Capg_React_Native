import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { DASHBOARD_SCREEN } from '../screens/DashboardScreen';
import { PROFILE_SCREEN } from '../screens/ProfileScreen';
import { ACTIVITIES_SCREEN } from '../screens/ActivitiesScreen';

const Tab = createBottomTabNavigator();

export default function HomeTabs() {
  return (
    <Tab.Navigator initialRouteName={DASHBOARD_SCREEN.name}>
      <Tab.Screen name={DASHBOARD_SCREEN.name} component={DASHBOARD_SCREEN.component} options={DASHBOARD_SCREEN.options} />
      <Tab.Screen name={ACTIVITIES_SCREEN.name} component={ACTIVITIES_SCREEN.component} options={ACTIVITIES_SCREEN.options} />
      <Tab.Screen name={PROFILE_SCREEN.name} component={PROFILE_SCREEN.component} options={PROFILE_SCREEN.options} />
    </Tab.Navigator>
  )
}

export const HOME_TABS = {
  name: 'HomeTabs',
  component: HomeTabs,
  options: {
    headerShown: false,
  },
}