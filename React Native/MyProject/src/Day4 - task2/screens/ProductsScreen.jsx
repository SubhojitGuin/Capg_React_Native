import { View, Text, TextInput, FlatList, Button } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, deleteFromCart, removeFromCart } from '../ProductSlice';
import styles from '../styles';

export default function ProductsScreen({ navigation }) {

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products).filter((product) => product.stock > 0);
  const cartItems = useSelector((state) => state.products.cart);

  const finalProducts = products.map((product) => {
    const cartItem = cartItems.find((item) => item.id === product.id);
    return {
      ...product,
      quantity: cartItem ? cartItem.quantity : 0,
    };
  });

  const [ searchQuery, setSearchQuery ] = useState('');
  const filteredProducts = finalProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Products Screen</Text>

      <View>
        <TextInput
          style={styles.textInput}
          placeholder="Search products..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <FlatList 
        style={styles.itemsContainer}
        data={filteredProducts}
        keyExtractor={(item) => item.id.toString()}
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
            </View>
          </View>
        )}
      />

      <Button
        title="Go to Cart"
        onPress={() => navigation.navigate('Cart')}
      />
    </View>
  )
}