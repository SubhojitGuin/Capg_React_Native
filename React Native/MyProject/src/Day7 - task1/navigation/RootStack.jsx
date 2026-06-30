import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HOME_TABS } from './HomeTabs';
import { LOGIN_SCREEN } from '../screens/LoginScreen';
import { DETAILS_SCREEN } from '../screens/DetailsScreen';

const Stack = createNativeStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator initialRouteName={LOGIN_SCREEN.name}>
      <Stack.Screen name={LOGIN_SCREEN.name} component={LOGIN_SCREEN.component} options={LOGIN_SCREEN.options} />
      <Stack.Screen name={HOME_TABS.name} component={HOME_TABS.component} options={HOME_TABS.options} />
      <Stack.Screen name={DETAILS_SCREEN.name} component={DETAILS_SCREEN.component} options={DETAILS_SCREEN.options} />
    </Stack.Navigator>
  )
}