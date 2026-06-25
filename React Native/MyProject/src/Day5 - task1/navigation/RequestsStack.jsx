import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import RequestsScreen, { REQUESTS_SCREEN } from '../screens/RequestsScreen';
import RequestDetailsScreen, { REQUEST_DETAILS_SCREEN } from '../screens/RequestDetailsScreen';
import AddRequestScreen, { ADD_REQUEST_SCREEN } from '../screens/AddRequestScreen';

const Stack = createNativeStackNavigator();

export default function RequestsStack() {
  return (
    <Stack.Navigator initialRouteName={REQUESTS_SCREEN} screenOptions={{ headerShown: false }}>
      <Stack.Screen name={REQUESTS_SCREEN} component={RequestsScreen} />
      <Stack.Screen name={REQUEST_DETAILS_SCREEN} component={RequestDetailsScreen} options={{ title: 'Request Details' }} />
      <Stack.Screen name={ADD_REQUEST_SCREEN} component={AddRequestScreen} options={{ title: 'Add Request' }} />
    </Stack.Navigator>
  )
}

export const REQUESTS_STACK = "RequestsStack";