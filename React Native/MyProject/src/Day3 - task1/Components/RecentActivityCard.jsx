import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import useStyles from '../useStyles';


export default function RecentActivityCard() {

  const styles = useStyles();

  return (
    <View style={styles.recentActivityCard}>
      <Text style={styles.recentActivityTitle}>Recent Activity</Text>

      <View style={styles.recentActivityContent}>
        <View style={styles.recentActivityItem}>
          <Ionicons name="checkmark-circle-sharp" size={24} color="#33d805" style={styles.recentActivityIcon} />
          <Text style={styles.recentActivityText} >Project Alpha Completed</Text>
          <Text style={styles.recentActivityStatus} >2 hours ago</Text>
        </View>
        <View style={styles.recentActivityItem}>
          <MaterialCommunityIcons name="plus-circle" size={24} color="#27e7f1" style={styles.recentActivityIcon} />
          <Text style={styles.recentActivityText} >New Task Added</Text>
          <Text style={styles.recentActivityStatus} >5 hours ago</Text>
        </View>
        <View style={styles.recentActivityItem}>
          <Ionicons name="document-sharp" size={24} color="#f38282" style={styles.recentActivityIcon} />
          <Text style={styles.recentActivityText} >Design Review Done</Text>
          <Text style={styles.recentActivityStatus} >1 day ago</Text>
        </View>
        <View style={styles.recentActivityItem}>
          <Ionicons name="people-circle" size={24} color="#558cfa" style={styles.recentActivityIcon} />
          <Text style={styles.recentActivityText} >Meeting with Team</Text>
          <Text style={styles.recentActivityStatus} >2 days ago</Text>
        </View>
        <View style={styles.recentActivityItem}>
          <Ionicons name="bug" size={24} color="#ef6767" style={styles.recentActivityIcon} />
          <Text style={styles.recentActivityText} >Bug Fixed</Text>
          <Text style={styles.recentActivityStatus} >3 days ago</Text>
        </View>
      </View>
    </View>
  )
}