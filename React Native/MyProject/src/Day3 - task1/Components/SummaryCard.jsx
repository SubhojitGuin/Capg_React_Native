import { View, Text } from 'react-native'
import React from 'react'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import useStyles from '../useStyles';

export default function SummaryCard() {

  const styles = useStyles();

  return (
    <View style={styles.summaryCard}>
      <Text style={styles.summaryTitle}>Summary</Text>

      <View style={styles.summaryStatGroup}>
        <View style={[styles.summaryStat, { backgroundColor: "#ffddf8" }]}>
          <FontAwesome5 name="clipboard-list" size={24} color="#e627e6" style={styles.summaryStatIcon} />
          <View style={styles.summaryStatContent}>
            <Text style={styles.summaryStatText}>Total Tasks</Text>
            <Text style={styles.summaryStatCount}>120</Text>
          </View>
        </View>

        <View style={[styles.summaryStat, { backgroundColor: "#ddffe2" }]}>
          <Ionicons name="checkmark-circle-sharp" size={24} color="#33d805" style={styles.summaryStatIcon} />
          <View style={styles.summaryStatContent}>
            <Text style={styles.summaryStatText}>Completed Tasks</Text>
            <Text style={styles.summaryStatCount}>85</Text>
          </View>
        </View>

        <View style={[styles.summaryStat, { backgroundColor: "#fbfac9" }]}>
          <MaterialCommunityIcons name="star-circle" size={24} color="#ebd509" style={styles.summaryStatIcon} />
          <View style={styles.summaryStatContent}>
            <Text style={styles.summaryStatText}>Reward Points</Text>
            <Text style={styles.summaryStatCount}>540</Text>
          </View>
        </View>
      </View>
    </View>
  )
}