import { View, Text, TextInput, Button } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {

  const [ name, setName ] = React.useState('');
  const [ savedName, setSavedName ] = React.useState('');

  function loadData() {
    // Load data from AsyncStorage
    AsyncStorage.getItem('name').then(value => {
      if (value) {
        setSavedName(value);
      }
    });
  }

  function saveData() {
    // Save data to AsyncStorage
    AsyncStorage.setItem('name', name).then(() => {
      setSavedName(name);
      // loadData(); // Refresh the saved name after saving
    });
  }

  React.useEffect(() => {
    loadData();
  }, []);

  return (
    <View>
      <Text>App</Text>
      <TextInput
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />
      <Text>Saved Name: {savedName || 'No name entered'}</Text>
      <Button
        title="Save Name"
        onPress={saveData}
      />
    </View>
  )
}