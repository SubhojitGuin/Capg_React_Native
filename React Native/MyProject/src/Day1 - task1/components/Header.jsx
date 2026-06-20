import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, IconButton, MD3Colors } from 'react-native-paper'
import styles from '../styles'


export default function Header({ onHeaderPlusPress }) {
  return (
    <View style={styles.header}>
        <View style={{ width: 24 }} />
        <Text style={styles.headerTitle}>My Tasks</Text>
        <IconButton 
          icon="plus"
          iconColor="#ffffff"
          onPress={onHeaderPlusPress}
        />
    </View>
  )
}

