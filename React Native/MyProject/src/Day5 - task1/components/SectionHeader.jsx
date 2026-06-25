import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function SectionHeader({ title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
})