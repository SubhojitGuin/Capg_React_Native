import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, TextInput } from 'react-native-paper'
import styles from '../styles'

export default function AddTaskBar({
  inputValue,
  setInputValue,
  inputRef,
  onAddTask,
}) {
  return (
    <View style={styles.addTaskBarContainer}>
      <TextInput
        ref={inputRef}
        mode="outlined"
        outlineStyle={styles.addTaskBarInputOutline}
        style={styles.addTaskBarInput}
        placeholder="Add a new task..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button
        onPress={onAddTask}
        style={styles.addTaskButton}
        labelStyle={styles.addTaskButtonLabel}
      >Add</Button>
    </View>
  )
}
