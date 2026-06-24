import { View, Text, Button } from 'react-native'
import React from 'react'

export default function DetailsScreen({ route, navigation }) {

  const { item, price } = route.params;

  return (
    <View>
      <Text>DetailsScreen</Text>
      <Text>Item: {item}</Text>
      <Text>Price: ${price}</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  )
}