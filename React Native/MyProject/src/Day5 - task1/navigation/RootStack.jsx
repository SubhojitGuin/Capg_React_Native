import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen, { WELCOME_SCREEN } from '../screens/WelcomeScreen';
import LoginScreen, { LOGIN_SCREEN } from '../screens/LoginScreen';
import AppDrawer, { APP_DRAWER } from './AppDrawer';

const Stack = createNativeStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator initialRouteName={WELCOME_SCREEN} screenOptions={{ headerShown: false }}>
      <Stack.Screen name={WELCOME_SCREEN} component={WelcomeScreen} />
      <Stack.Screen name={LOGIN_SCREEN} component={LoginScreen} />
      <Stack.Screen name={APP_DRAWER} component={AppDrawer} options={{ title: 'Home' }} />
    </Stack.Navigator>
  )
}