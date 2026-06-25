import { View, Text } from 'react-native'
import React from 'react'
import SectionHeader from '../components/SectionHeader';

export default function SettingsScreen() {
  return (
    <View>
      <SectionHeader title="Settings" />

      <View>
        <Text>This is the settings</Text>
      </View>
    </View>
  )
}

export const SETTINGS_SCREEN = "Settings";