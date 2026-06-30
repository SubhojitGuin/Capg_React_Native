import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { DETAILS_SCREEN } from './DetailsScreen';
import { HEALTH_DATA } from '../data/data';

export default function DashboardScreen({ navigation }) {

  const renderCard = (key, metric) => (
    <TouchableOpacity
      key={key}
      style={styles.card}
      onPress={() => navigation.navigate(DETAILS_SCREEN.name, { metricKey: key })}
    >
      <Text style={styles.cardTitle} >{metric.title}</Text>
      <Text style={styles.cardText} >{metric.value}</Text>
      <Text style={styles.cardText} >Target: {metric.target}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {Object.entries(HEALTH_DATA).map(([key, metric]) => renderCard(key, metric))}
    </ScrollView>
  )
}

export const DASHBOARD_SCREEN = {
  name: 'DashboardScreen',
  component: DashboardScreen,
  options: {
    title: 'Dashboard',
  },
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#b4a7a7',
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
})