import { View, Text, Image } from 'react-native'
import React from 'react'
import useStyles from '../useStyles'
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';


export default function ProfileCard() {

  const styles = useStyles();

  return (
    <View style={styles.profileCard}>
      <View style={styles.profileHeader}>
        <Image 
        style={styles.avatarImage}
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyVq90nceIL2JrQVH0ZIiFDy5djkm0Zq4cSM2WpyDijg&s=10' }} />
        <View>
          <Text style={styles.profileName}>John Doe</Text>
          <Text style={styles.profileEmail}>john.doe@gmail.com</Text>
        </View>
      </View>
      <View style={styles.profileStatGroup}>
        <View style={[styles.profileStat, styles.profileStatBorder]}>
          <Ionicons name="folder" size={24} color="#c63ff3" />
          <View>
            <Text style={styles.profileStatCount}>28</Text>
            <Text style={styles.profileStatText}>Projects</Text>
          </View>
        </View>
        <View style={[styles.profileStat, styles.profileStatBorder]}>
          <FontAwesome6 name="clipboard-check" size={24} color="#00cb14" />
          <View>
            <Text style={styles.profileStatCount}>120</Text>
            <Text style={styles.profileStatText}>Tasks</Text>
          </View>
        </View>
        <View style={styles.profileStat}>
          <FontAwesome6 name="trophy" size={24} color="#edea0d" />
          <View>
            <Text style={styles.profileStatCount}>12</Text>
            <Text style={styles.profileStatText}>Awards</Text>
          </View>
        </View>
      </View>
    </View>
  )
}