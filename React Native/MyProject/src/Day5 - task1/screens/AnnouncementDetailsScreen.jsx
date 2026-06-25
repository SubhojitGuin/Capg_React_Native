import { View, Text, Button } from 'react-native'
import React from 'react'
import SectionHeader from '../components/SectionHeader';

export default function AnnouncementDetailsScreen({ route, navigation }) {
  const { announcement } = route.params;

  return (
    <View>
      <SectionHeader title="Announcement Details" />
      <View>
        <Text>Id: {announcement.id}</Text>
        <Text>Title: {announcement.title}</Text>
        <Text>Type: {announcement.type}</Text>
        <Text>Date: {announcement.date}</Text>
      </View>
      <Button title="Back" onPress={() => navigation.goBack()} />
    </View>
  )
}

export const ANNOUNCEMENT_DETAILS_SCREEN = 'AnnouncementDetails';