import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Avatar } from 'react-native-paper';
import styles from '../styles';

export default function WelcomeCard({ userName, pendingCount }) {

  const initial = userName ? userName.charAt(0).toUpperCase() : 'U';

  return (
    <View style={styles.welcomeCard}>
      <Avatar.Text label={initial} style={styles.avatar} labelStyle={styles.avatarText} size={40}/>
      <View style={styles.container}>
        <Text style={styles.welcomeTitle}>Hello, {userName}!</Text>
        <Text style={styles.welcomeSubtitle}>
          {
            (pendingCount > 0)
            ? (`You have ${pendingCount} tasks to complete.`)
            : "Hurray! All tasks completed." 
          }
        </Text>
      </View>
    </View>
  )
}