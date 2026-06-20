import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function EmployeeCard({ name, salary }) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>Name: {name}</Text>
      <Text>Salary: ${salary}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'lightblue',
    padding: 10,
    margin: 10,
    borderRadius: 5
  },
  name: {
    fontWeight: 'bold',
    fontSize: 20,
  }
})