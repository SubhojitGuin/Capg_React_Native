import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Emergency Contacts</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#da0095'
  },
  headerText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  }
})