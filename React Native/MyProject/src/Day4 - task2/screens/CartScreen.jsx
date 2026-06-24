import { View, Text, Button } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FlatList } from 'react-native-web';
import { addToCart, deleteFromCart, placeOrder, removeFromCart } from '../ProductSlice';
import styles from '../styles';

export default function CartScreen({ navigation }) {

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.products.cart);

  const subTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const totalTaxes = cartItems.reduce((total, item) => total + (item.price * item.quantity * item.taxRate / 100), 0);
  const total = subTotal + totalTaxes;

  const handlePlaceOrder = () => {
    dispatch(placeOrder());
    navigation.navigate('Orders');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart Screen</Text>

      {cartItems.length == 0 ? (
        <Text style={styles.itemsContainer}>Cart is empty.</Text>
      ) : (
      <FlatList
        style={styles.itemsContainer}
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemCard}>
            <View>
              <Text>{item.name}</Text>
              <Text>${item.price}</Text>
              <Text>Quantity: {item.quantity}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Button
                title="+"
                onPress={() => dispatch(addToCart(item))}
              />
              <Button 
                title="-"
                onPress={() => dispatch(removeFromCart(item))}
              />
              <Button 
                color='#ba1111'
                title="Delete"
                onPress={() => dispatch(deleteFromCart(item))}
              />
            </View>
          </View>
        )}
      />
      )}

      <View style={styles.cartSummary}>
        <Text>Subtotal: ${subTotal.toFixed(2)}</Text>
        <Text>Total Taxes: ${totalTaxes.toFixed(2)}</Text>
        <Text>Total: ${total.toFixed(2)}</Text>
      </View>

      <Button
        title="Place Order"
        onPress={handlePlaceOrder}
      />
    </View>
  )
}