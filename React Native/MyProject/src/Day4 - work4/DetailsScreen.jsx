import { View, Text, Button } from 'react-native'
import React from 'react'

export default function DetailsScreen({ route, navigation }) {

  const { name } = route.params;

  return (
    <View>
      <Text>DetailsScreeen: {name}</Text>
      <Button title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  )
}