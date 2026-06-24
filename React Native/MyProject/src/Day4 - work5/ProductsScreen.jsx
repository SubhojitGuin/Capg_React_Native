import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { Button } from 'react-native'
 
 
const products=[
    {id:1,name:'Product 1',price:100},
    {id:2,name:'Product 2',price:200},
    {id:3,name:'Product 3',price:300},
]
export default function ProductsScreen({navigation}) {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Products</Text>
        <FlatList
            data={products}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <View style={StyleSheet.item}>
                    <Text style={StyleSheet.itemName}>{item.name}</Text>
                    <Text style={StyleSheet.itemPrice}>${item.price}</Text>
                </View>
            )}
        />
        <Button
        title='Go to Dashboard'
        onPress={() => navigation.navigate('Dashboard')}
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
    itemName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    itemPrice: {
        fontSize: 16,
        color: '#888',
    },
});