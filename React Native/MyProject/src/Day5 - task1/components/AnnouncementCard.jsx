import { View, Text, Button } from 'react-native'
import React from 'react'
import { ANNOUNCEMENT_DETAILS_SCREEN } from '../screens/AnnouncementDetailsScreen'

export default function AnnouncementCard({ announcement, navigation }) {
  return (
    <View>
      <Text>{announcement.title}</Text>
      <Text>{announcement.description}</Text>
      <Button title="View Details" onPress={() => navigation.navigate(ANNOUNCEMENT_DETAILS_SCREEN, { announcement })} />
    </View>
  )
}