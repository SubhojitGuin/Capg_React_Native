import { View, Text, Button } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler';
import SectionHeader from '../components/SectionHeader';
import { APP_DRAWER } from '../navigation/AppDrawer';

export default function LoginScreen({ navigation }) {
  return (
    <View>
      <SectionHeader title="Login" />
      <View>
        <TextInput placeholder="Username" />
        <TextInput placeholder="Password" />
      </View>
      <Button title="Login" onPress={() => navigation.navigate(APP_DRAWER)} />
    </View>
  )
}

export const LOGIN_SCREEN = "Login";