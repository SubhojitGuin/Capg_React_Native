import { View, Text } from 'react-native'
import React from 'react'

export default function EventCard({ event }) {
  return (
    <View>
      <Text>{event.name}</Text>
      <Text>Id: {event.id}</Text>
      <Text>Date: {event.date}</Text>
      <Text>Venue: {event.venue}</Text>
    </View>
  )
}