import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { HEALTH_DATA } from '../data/data';

export default function DetailsScreen({ route }) {

  const { metricKey } = route.params;
  const data = HEALTH_DATA[metricKey];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Details</Text>
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.value}>Current Value: {data.value}</Text>
      <Text style={styles.target}>Target: {data.target}</Text>
    </View>
  )
}

export const DETAILS_SCREEN = {
  name: 'DetailsScreen',
  component: DetailsScreen,
  options: {
    title: 'Details',
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  value: {
    fontSize: 16,
    marginBottom: 8,
  },
  target: {
    fontSize: 16,
    color: '#555',
  },
})