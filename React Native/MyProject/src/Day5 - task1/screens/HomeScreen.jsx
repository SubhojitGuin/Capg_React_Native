import { View, Text, Button } from 'react-native'
import React from 'react'
import SectionHeader from '../components/SectionHeader';
import { HELP_SCREEN } from './HelpScreen';
import { REQUESTS_STACK } from '../navigation/RequestsStack';
import { ANNOUNCEMENTS_STACK } from '../navigation/AnnouncementsStack';
import { PROFILE_STACK } from '../navigation/ProfileStack';

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <SectionHeader title="Home" />

      <View>
        <Button title="Go to Help" onPress={() => navigation.navigate(HELP_SCREEN)} />
        <Button title="Go to Requests" onPress={() => navigation.navigate(REQUESTS_STACK)} />
        <Button title="Go to Announcements" onPress={() => navigation.navigate(ANNOUNCEMENTS_STACK)} />
        <Button title="Go to Profile" onPress={() => navigation.navigate(PROFILE_STACK)} />
      </View>
    </View>
  )
}

export const HOME_SCREEN = 'Home';