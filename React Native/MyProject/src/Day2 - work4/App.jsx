import { View, Text, Platform } from 'react-native'
import React from 'react'
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

function MainLayout() {
  const myinsets = useSafeAreaInsets();
  
  return (
    <View style={{
        paddingTop: myinsets.top,
        height: 50 + myinsets.top,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
    }}>
        { Platform.OS === 'ios' ? <Text style={{color: 'white'}}>This is an iOS platform</Text> : <Text style={{color: 'white'}}>This is an Android platform</Text> }
        <Text style={{color: 'white'}}>Current Platform: {Platform.OS}</Text>
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <MainLayout />
    </SafeAreaProvider>
  );
}
