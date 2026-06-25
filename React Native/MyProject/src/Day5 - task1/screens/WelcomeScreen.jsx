import { View, Text, Button } from 'react-native'
import React from 'react'
import { LOGIN_SCREEN } from './LoginScreen';
import SectionHeader from '../components/SectionHeader';

export default function WelcomeScreen({ navigation }) {
  return (
    <View>
      <SectionHeader title="Welcome" />
      <Button title="Login" onPress={() => navigation.navigate(LOGIN_SCREEN)} />
    </View>
  )
}

export const WELCOME_SCREEN = "Welcome";