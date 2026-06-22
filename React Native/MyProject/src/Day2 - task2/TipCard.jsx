import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function TipCard({ tip }) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardText}>{tip}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    backgroundColor: '#7ee932',
  },
  cardText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#137632',
  }
})