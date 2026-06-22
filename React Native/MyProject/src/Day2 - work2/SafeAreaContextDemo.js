import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const SafeAreaContextDemo = () => {
  return (
    // <View style={styles.container}>
    //   <Text style={styles.text}>Safe Area Context Demo</Text>
    // </View>
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Safe Area Context Demo</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default SafeAreaContextDemo

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#219760"
  },
  text: {
    color: '#fff',
    fontSize: 24
  }
});

// SafeAreaView is a component that renders content within the safe area boundaries of a device. It is used to ensure that the content is not obscured by notches, status bars, or other screen elements on modern devices. SafeAreaProvider is a higher-order component that provides the necessary context for SafeAreaView to function properly. It should wrap the entire application to ensure that all SafeAreaView components have access to the safe area insets.