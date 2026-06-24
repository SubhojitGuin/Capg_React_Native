import { View, Text, KeyboardAvoidingView, TextInput, Platform, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

export default function KeyboardAvoidingViewDemo() {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView>
        <TextInput
          style={styles.input}
          placeholder='Enter name'
        />
        <TextInput
          style={styles.input}
          placeholder='Enter height'
        />
        <TextInput
          style={styles.input}
          placeholder='Enter city'
        />
        <TextInput
          style={styles.input}
          placeholder='Enter state'
        />
        <TextInput
          style={styles.input}
          placeholder='Enter nickname'
        />
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
  },
});