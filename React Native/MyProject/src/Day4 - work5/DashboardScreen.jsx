import { View, Text,Button, StyleSheet } from 'react-native'
import React from 'react'
 
export default function DashboardScreen({navigation}) {
 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>WholeSalers Market</Text>
        <Text style={styles.subtitle}>Welcome to the Dashboard</Text>
        <Button
        title='Go to Products'
        onPress={() => navigation.navigate('Products')}
        />
        <Button
        title='Go to Orders'
        onPress={() => navigation.navigate('Orders')}
        />
 
    </View>
  )
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 18,
        marginBottom: 40,
    },
});