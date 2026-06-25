import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen, { PROFILE_SCREEN } from '../screens/ProfileScreen';
import EditProfileScreen, { EDIT_PROFILE_SCREEN } from '../screens/EditProfileScreen';

const Stack = createNativeStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator initialRouteName={PROFILE_SCREEN} screenOptions={{ headerShown: false }}>
      <Stack.Screen name={PROFILE_SCREEN} component={ProfileScreen} />
      <Stack.Screen name={EDIT_PROFILE_SCREEN} component={EditProfileScreen} options={{ title: 'Edit Profile' }} />
    </Stack.Navigator>
  )
}

export const PROFILE_STACK = "ProfileStack";