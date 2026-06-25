import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import RootStack from './navigation/RootStack'
import AppProvider from './context/AppProvider'

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </AppProvider>
  )
}