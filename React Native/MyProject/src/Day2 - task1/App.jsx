import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import Header from './Header'
import Contact from './Contact';

export default function App() {

  const [contacts, setContacts] = React.useState([
    {
      id: 1,
      imgUrl: 'https://dummyjson.com/icon/emilys/128',
      name: 'Emily Johnson',
      relationship: 'Wife',
      phoneNumber: '+81 965-431-3024',
      address: '626 Main Street, Phoenix, Mississippi, 29112, United States',
    },
    {
      id: 2,
      imgUrl: 'https://dummyjson.com/icon/johns/128',
      name: 'John Smith',
      relationship: 'Brother',
      phoneNumber: '+81 965-431-3024',
      address: '626 Main Street, Phoenix, Mississippi, 29112, United States',
    },
    {
      id: 3,
      imgUrl: 'https://dummyjson.com/icon/sarahs/128',
      name: 'Sarah Williams',
      relationship: 'Sister',
      phoneNumber: '+81 965-431-3024',
      address: '626 Main Street, Phoenix, Mississippi, 29112, United States',
    },
    {
      id: 4,
      imgUrl: 'https://dummyjson.com/icon/michaels/128',
      name: 'Michael Brown',
      relationship: 'Friend',
      phoneNumber: '+81 965-431-3024',
      address: '626 Main Street, Phoenix, Mississippi, 29112, United States',
    }
  ]);

  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView style={styles.container}>

        <Header/>

        <FlatList
          data={contacts}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
            <Contact person={item}/>
          )}
          style={styles.contactContainer}
        />

      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 2
  },
  contactContainer: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 10,
  }
})