import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { HOME_TABS } from '../navigation/HomeTabs'

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TextInput style={styles.textInput} placeholder='Enter your username' />
      <TextInput style={styles.textInput} placeholder='Enter your password' secureTextEntry />
      <Button onPress={() => navigation.replace(HOME_TABS.name)} title="Login" />
    </View>
  )
}

export const LOGIN_SCREEN = {
  name: 'LoginScreen',
  component: LoginScreen,
  options: {
    headerShown: false,
  },
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
})