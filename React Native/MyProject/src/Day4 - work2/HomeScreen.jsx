import { View, Text, Button } from 'react-native'
import React from 'react'

export default function HomeScreen({ route, navigation }) {

  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title="Go to Details"
        onPress={() => navigation.navigate('Details', { name: 'Subhojit' })}
      />
    </View>
  )
}