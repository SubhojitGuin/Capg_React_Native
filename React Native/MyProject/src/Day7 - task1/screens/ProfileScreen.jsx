import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { USER_PROFILE } from '../data/data'
import { LOGIN_SCREEN } from './LoginScreen'

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Profile</Text>

      <Text style={styles.info}>Name: {USER_PROFILE.name}</Text>
      <Text style={styles.info}>Age: {USER_PROFILE.age} years</Text>
      <Text style={styles.info}>Weight: {USER_PROFILE.weight} kg</Text>
      <Text style={styles.info}>Height: {USER_PROFILE.height} cm</Text>

      <Button title="Logout" onPress={() => navigation.replace(LOGIN_SCREEN.name)} />
    </View>
  )
}

export const PROFILE_SCREEN = {
  name: 'ProfileScreen',
  component: ProfileScreen,
  options: {
    title: 'Profile',
  },
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  info: {
    fontSize: 16,
    marginBottom: 8,
  },
})