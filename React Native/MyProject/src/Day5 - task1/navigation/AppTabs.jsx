import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen, { HOME_SCREEN } from '../screens/HomeScreen';
import AnnouncementsStack, { ANNOUNCEMENTS_STACK } from './AnnouncementsStack';
import ProfileStack, { PROFILE_STACK } from './ProfileStack';
import RequestsStack, { REQUESTS_STACK } from './RequestsStack';

const Tab = createBottomTabNavigator();

export default function AppTabs() {
  return (
    <Tab.Navigator initialRouteName={HOME_SCREEN} screenOptions={{ headerShown: false }}>
      <Tab.Screen name={HOME_SCREEN} component={HomeScreen} />
      <Tab.Screen name={REQUESTS_STACK} component={RequestsStack} options={{ title: 'My Requests' }} />
      <Tab.Screen name={ANNOUNCEMENTS_STACK} component={AnnouncementsStack} options={{ title: 'Announcements' }} />
      <Tab.Screen name={PROFILE_STACK} component={ProfileStack} options={{ title: 'Profile' }} />
    </Tab.Navigator>
  )
}

export const APP_TABS = "AppTabs";