import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import Header from './Header';
import TipCard from './TipCard';

export default function App() {

  const [tips, setTips] = React.useState([
    'Drink more water',
    'Take regular breaks',
    'Exercise daily',
    'Eat healthy food',
    'Sleep well',
    'Reduce screen time',
    'Practice meditation',
    'Stay positive',
    'Walk 10 minutes daily',
    'Maintain proper posture',
  ]);

  const [showMessage, setShowMessage] = React.useState(false);
  const [offset, setOffset] = React.useState(0);

  function handleScroll(event) {
    const offsetY = event.nativeEvent.contentOffset.y;
    setShowMessage(offsetY > 50);
    setOffset(offsetY);
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>

        <Header/>
        <View>
        {
          showMessage &&
          <Text style={styles.scrollMessage}>You're scrolling, scroll position is: {offset}</Text>
        }
        </View>

        <ScrollView
          onScroll={handleScroll}
          scrollEventThrottle={100}
          showsVerticalScrollIndicator={true}
          persistentScrollbar={true}
          style={styles.scrollView}
        >
          {
            tips.map((tip, index) => 
              <TipCard key={index} tip={tip}/>
            )
          }
        </ScrollView>

      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollView: {
    flex: 1
  },
  scrollMessage: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  }
})