import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import AppTabs, { APP_TABS } from './AppTabs';
import RequestsStack, { REQUESTS_STACK } from './RequestsStack';
import AnnouncementsStack, { ANNOUNCEMENTS_STACK } from './AnnouncementsStack';
import EventsScreen, { EVENTS_SCREEN } from '../screens/EventsScreen';
import PaymentsScreen, { PAYMENTS_SCREEN } from '../screens/PaymentsScreen';
import SettingsScreen, { SETTINGS_SCREEN } from '../screens/SettingsScreen';
import HelpScreen, { HELP_SCREEN } from '../screens/HelpScreen';
import LoginScreen, { LOGIN_SCREEN } from '../screens/LoginScreen';

const Drawer = createDrawerNavigator();

export default function AppDrawer() {
  return (
    <Drawer.Navigator initialRouteName={APP_TABS}>
      <Drawer.Screen name={APP_TABS} component={AppTabs} options={{ title: 'Home' }} />
      <Drawer.Screen name={REQUESTS_STACK} component={RequestsStack} options={{ title: 'My Requests' }} />
      <Drawer.Screen name={ANNOUNCEMENTS_STACK} component={AnnouncementsStack} options={{ title: 'Announcements' }} />
      <Drawer.Screen name={EVENTS_SCREEN} component={EventsScreen} options={{ title: 'Community Events' }} />
      <Drawer.Screen name={PAYMENTS_SCREEN} component={PaymentsScreen} options={{ title: 'Payments' }} />
      <Drawer.Screen name={SETTINGS_SCREEN} component={SettingsScreen} options={{ title: 'Settings' }} />
      <Drawer.Screen name={HELP_SCREEN} component={HelpScreen} options={{ title: 'Help' }} />
      <Drawer.Screen name={LOGIN_SCREEN} component={LoginScreen} options={{ title: 'Logout' }} />
    </Drawer.Navigator>
  )
}

export const APP_DRAWER = "AppDrawer";