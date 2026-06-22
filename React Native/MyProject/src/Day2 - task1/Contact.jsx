import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Avatar } from 'react-native-paper'

export default function Contact({ person }) {

  function handleCall() {
    alert(`Calling ${person.name} at ${person.phoneNumber}...`);
  }

  function handleMessage() {
    alert(`Sending message to ${person.name} at ${person.phoneNumber}...`);
  }

  return (
    <TouchableOpacity
      style={styles.contact}
      activeOpacity={0.8}
    >
      <Avatar.Image 
        size={64}
        source={{ uri: person.imgUrl }}
      />

      <View>
        <Text style={styles.contactName}>{person.name}</Text>
        <Text style={styles.relationship}>{person.relationship}</Text>
        <Text style={styles.phoneNumber}>{person.phoneNumber}</Text>
        <Text>{person.address}</Text>
      </View>

      <View style={styles.actionsContainer}>
        <TouchableOpacity style={[styles.customButton, { backgroundColor: 'green' }]} onPress={handleCall}>
          <Text style={styles.buttonText}>Call Now</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.customButton, { backgroundColor: 'blue' }]} onPress={handleMessage}>
          <Text style={styles.buttonText}>Message</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  contact: {
    flexDirection: 'row',
    backgroundColor: '#bcbcbc',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginVertical: 5,
    borderRadius: 10,
    alignItems: 'center'
  },
  contactName: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  relationship: {
    fontSize: 16,
    fontStyle: 'italic'
  },
  phoneNumber: {
    fontSize: 16,
    color: 'blue'
  },
  customButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    marginVertical: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
})