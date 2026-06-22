import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome, {Platform.OS} user! Your version is {Platform.Version}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    padding: 10,
    margin: 10,
    borderRadius: Platform.OS === "ios" ? 10 : 2,
    backgroundColor: Platform.OS === "ios" ? 'yellow' : 'green',
     boxShadow: Platform.OS === "ios" ? '4px 6px rgba(0, 0, 0, 0.1)' : '10px 6px rgba(0, 0, 0, 0.5)',
  }
})