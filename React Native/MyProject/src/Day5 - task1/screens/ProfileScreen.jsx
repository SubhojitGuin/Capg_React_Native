import { View, Text, Button } from 'react-native'
import React from 'react'
import { useAppContext } from '../context/AppContext';
import SectionHeader from '../components/SectionHeader';
import { EDIT_PROFILE_SCREEN } from './EditProfileScreen';

export default function ProfileScreen({ navigation }) {

  const { profile } = useAppContext();

  return (
    <View>
      <SectionHeader title="Profile" />
      <View>
        <Text>Id: {profile.id}</Text>
        <Text>Name: {profile.name}</Text>
        <Text>Flat No: {profile.flatNo}</Text>
        <Text>Phone: {profile.phone}</Text>
        <Text>Email: {profile.email}</Text>
      </View>
      <Button title="Edit Profile" onPress={() => navigation.navigate(EDIT_PROFILE_SCREEN)} />
    </View>
  )
}

export const PROFILE_SCREEN = "Profile";