import { View, Text } from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import useStyles from '../useStyles';

export default function Footer() {

  const styles = useStyles();

  return (
    <View style={styles.footer}>
      <FontAwesome name="quote-left" size={24} color="#205bb5" />
      <View>
        <Text>&ldquo;The best way to predict the future is to create it.&rdquo;</Text>
        <Text>— Peter Drucker</Text>
      </View>
    </View>
  )
}