import { View, Text, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import * as SplashScreen from 'expo-splash-screen';
import axios from 'axios';

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [ user, setUser ] = React.useState(null);
  const [ appIsReady, setAppIsReady ] = React.useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        await new Promise(res=>setTimeout(res,2000));
        const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
        setUser(response.data);
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
        await SplashScreen.hideAsync();
      }
    }
    fetchData();
  }, []);

  if (!appIsReady) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading...</Text>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {user ? (
          <Text>User: {user.name}</Text>
        ) : (
          <Text>Failed to load user data.</Text>
        )
      }
    </View>
  )
}