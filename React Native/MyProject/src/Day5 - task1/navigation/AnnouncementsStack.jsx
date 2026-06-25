import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AnnouncementsScreen, { ANNOUNCEMENTS_SCREEN } from '../screens/AnnouncementsScreen';
import AnnouncementDetailsScreen, { ANNOUNCEMENT_DETAILS_SCREEN } from '../screens/AnnouncementDetailsScreen';

const Stack = createNativeStackNavigator();

export default function AnnouncementsStack() {
  return (
    <Stack.Navigator initialRouteName={ANNOUNCEMENTS_SCREEN} screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ANNOUNCEMENTS_SCREEN} component={AnnouncementsScreen} />
      <Stack.Screen name={ANNOUNCEMENT_DETAILS_SCREEN} component={AnnouncementDetailsScreen} options={{ title: 'Announcement Details' }} />
    </Stack.Navigator>
  )
}

export const ANNOUNCEMENTS_STACK = "AnnouncementsStack";