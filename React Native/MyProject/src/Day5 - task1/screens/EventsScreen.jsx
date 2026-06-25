import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { useAppContext } from '../context/AppContext';
import SectionHeader from '../components/SectionHeader';
import EventCard from '../components/EventCard';

export default function EventsScreen() {

  const { events } = useAppContext();

  return (
    <View>
      <SectionHeader title="Events" />

      <FlatList 
        data={events}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <EventCard event={item} />}
      />
    </View>
  )
}

export const EVENTS_SCREEN = "Events";