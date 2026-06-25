import { View, Text, FlatList } from 'react-native'
import React from 'react'
import SectionHeader from '../components/SectionHeader';
import { useAppContext } from '../context/AppContext';
import AnnouncementCard from '../components/AnnouncementCard';

export default function AnnouncementsScreen({ navigation }) {

  const { announcements } = useAppContext();

  return (
    <View>
      <SectionHeader title="Announcements" />

      <FlatList 
        data={announcements}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <AnnouncementCard announcement={item} navigation={navigation} />}
      />
    </View>
  )
}

export const ANNOUNCEMENTS_SCREEN = 'Announcements';