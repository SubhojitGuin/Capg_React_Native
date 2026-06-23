import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import useStyles from './useStyles'
import mobileStyles from './mobileStyles';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ProfileCard from './Components/ProfileCard';
import SummaryCard from './Components/SummaryCard';
import RecentActivityCard from './Components/RecentActivityCard';

export default function App() {
  const styles = useStyles();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Header />

        <View style={styles.contentBody}>
          <View>
            <ProfileCard />
            <SummaryCard />
          </View>
          <RecentActivityCard/>
        </View>

        <Footer/>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}
