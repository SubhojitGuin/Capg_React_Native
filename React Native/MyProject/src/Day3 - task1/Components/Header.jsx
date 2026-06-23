import { View, Text } from 'react-native'
import React from 'react'
import useStyles from '../useStyles'
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Header() {

  const styles = useStyles();

  return (
    <View style={styles.header}>
      <AntDesign name="menu" size={24} color="white" style={styles.headerIcon} />
      <Text style={styles.headerText}>My Dashboard</Text>
      <AntDesign name="bell" size={24} color="white" style={styles.headerIcon} />
    </View>
  )
}