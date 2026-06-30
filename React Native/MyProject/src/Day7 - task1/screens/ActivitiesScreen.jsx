import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ACTIVITIES } from '../data/data'

export default function ActivitiesScreen() {
  return (
    <View style={styles.container}>
      <FlatList 
        data={ACTIVITIES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemTitle}>{item.name}</Text>
            <Text style={styles.itemText}>{item.duration}</Text>
            <Text style={styles.itemText}>{item.calories}</Text>
          </View>
        )}
      />
    </View>
  )
}

export const ACTIVITIES_SCREEN = {
  name: 'ActivitiesScreen',
  component: ActivitiesScreen,
  options: {
    title: 'Activities',
  },
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  itemContainer: {
    backgroundColor: '#f0f0f0',
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemText: {
    fontSize: 14,
    color: '#555',
  },
})