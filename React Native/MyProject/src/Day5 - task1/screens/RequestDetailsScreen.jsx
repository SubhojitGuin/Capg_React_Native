import { View, Text, Button } from 'react-native'
import React from 'react'
import SectionHeader from '../components/SectionHeader';

export default function RequestDetailsScreen({ route, navigation }) {

  const { request } = route.params;

  return (
    <View>
      <SectionHeader title="Request Details" />
      <View>
        <Text>Id: {request.id}</Text>
        <Text>Title: {request.title}</Text>
        <Text>Category: {request.category}</Text>
        <Text>Status: {request.status}</Text>
        <Text>Priority: {request.priority}</Text>
        <Text>Resident Id: {request.residentId}</Text>
        <Text>Created At: {request.createdAt}</Text>
      </View>

      <Button title="Back" onPress={() => navigation.goBack()} />
    </View>
  )
}

export const REQUEST_DETAILS_SCREEN = "RequestDetails";