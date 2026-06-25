import { View, Text } from 'react-native'
import React from 'react'
import SectionHeader from '../components/SectionHeader';

export default function HelpScreen() {
  return (
    <View>
      <SectionHeader title="Help" />
      <Text>HELP</Text>
    </View>
  )
}

export const HELP_SCREEN = "Help";