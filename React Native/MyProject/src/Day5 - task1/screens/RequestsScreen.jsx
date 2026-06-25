import { View, Text, FlatList, Button } from 'react-native'
import React from 'react'
import SectionHeader from '../components/SectionHeader';
import { ADD_REQUEST_SCREEN } from './AddRequestScreen';
import RequestCard from '../components/RequestCard';
import { useAppContext } from '../context/AppContext';

export default function RequestsScreen({ navigation }) {

  const { requests } = useAppContext();

  return (
    <View>
      <SectionHeader title="Requests" />
      <Button title="Add Request" onPress={() => navigation.navigate(ADD_REQUEST_SCREEN)} />
      
      <FlatList 
        data={requests}
        renderItem={({ item }) => <RequestCard request={item} navigation={navigation} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

export const REQUESTS_SCREEN = "Requests";