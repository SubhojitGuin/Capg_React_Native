import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { Button } from 'react-native';
 
const orders=[
    {id:"ORD0001", date:"2023-06-01", total:100.00, status:"Delivered"},
    {id:"ORD0002", date:"2023-06-05", total:50.00, status:"Pending"},
    {id:"ORD0003", date:"2023-06-10", total:75.00, status:"Cancelled"},
]
export default function OrdersScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>OrdersScreen</Text>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemId}>{item.id}</Text>
            <Text style={styles.itemDate}>{item.date}</Text>
            <Text style={styles.itemTotal}>${item.total.toFixed(2)}</Text>
            <Text style={styles.itemStatus}>{item.status}</Text>
          </View>
        )}
      />
      <Button   
        title='Go to Dashboard'
        onPress={() => navigation.navigate('Dashboard')}
      />
      <Button
        title='Go to Products'
        onPress={() => navigation.navigate('Products')}
      />
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    item: {
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 5,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    itemId: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    itemDate: {
        fontSize: 14,
        color: '#666',
    },
    itemTotal: {
        fontSize: 14,
        color: '#666',
    },
    itemStatus: {
        fontSize: 14,
        color: '#666',
    },
});