import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import styles from '../styles';

export default function OrdersScreen() {

  const orders = useSelector((state) => state.products.orders);
  orders.sort((a, b) => b.timestamp.localCompare(a.timestamp));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Orders Screen</Text>

      {orders.length === 0 ? (
        <Text style={styles.itemsContainer}>No orders yet.</Text>
        ) : (
          <FlatList
            style={styles.itemsContainer}
            data={orders}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.orderCard}>
                <Text>Order ID: {item.id}</Text>
                <Text>Total: ${item.total.toFixed(2)}</Text>
                <Text>Items:</Text>
                {item.items.map((cartItem) => (
                  <View key={cartItem.id} style={styles.orderCard}>
                    <Text>{cartItem.name} - Quantity: {cartItem.quantity}</Text>
                  </View>
                ))}
              </View>
            )}
          />
        )
      }

    </View>
  )
}