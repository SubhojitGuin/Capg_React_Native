import { View, Text, Button } from 'react-native'
import React from 'react'
import { REQUEST_DETAILS_SCREEN } from '../screens/RequestDetailsScreen'

export default function RequestCard({ request, navigation }) {
  return (
    <View>
      <View>
      <Text>Title: {request.title}</Text>
      <Text>Status: {request.status}</Text>
      <Text>Priority: {request.priority}</Text>
      </View>
      <Button title="View Details" onPress={() => navigation.navigate(REQUEST_DETAILS_SCREEN, { request: request })} />
    </View>
  )
}