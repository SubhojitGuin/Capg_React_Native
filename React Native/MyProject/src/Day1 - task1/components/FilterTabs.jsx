import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper';
import styles from '../styles';

export default function FilterTabs({ selectedFilter, setSelectedFilter, counts }) {

  const filters = ['All', 'Pending', 'Completed'];

  return (
    <View style={styles.filterContainer}>
      {
        filters.map(filter => {
          const isActive = filter === selectedFilter;
          return <Button
            key={filter}
            style={styles.filterButton} 
            labelStyle={styles.filterButtonLabel}
            mode={isActive ? 'contained' : 'contained-tonal'}
            onPress={() => setSelectedFilter(filter)}
            buttonColor=''
          >
            {filter} ({counts[filter]})
          </Button>
        })
      }
    </View>
  )
}
