import { View, Text, Button, FlatList } from 'react-native'
import React from 'react'

export default function HomeScreen({ navigation }) {

  const items = [
    {
      item: 'Pizza',
      price: 12
    },
    {
      item: 'Burger',
      price: 10
    },
    {
      item: 'Pasta',
      price: 14
    },
  ]

  return (
    <View>
      <Text>HomeScreen</Text>
      <FlatList
        data={items}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => 
          <Button title={item.item} onPress={() => navigation.navigate('Details', item)} />
        }
      />
    </View>
  )
}