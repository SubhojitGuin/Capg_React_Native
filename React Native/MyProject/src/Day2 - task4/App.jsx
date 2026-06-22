import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function App() {
  return (
    <View style={styles.container}>
      <Image 
        style={styles.image}
        source={require('../../assets/android-icon-background.png')} 
      />
      <Image
        style={styles.image}
        source={{
          uri: 'https://dummyjson.com/icon/sarahs/128',
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20, 
  },
})
