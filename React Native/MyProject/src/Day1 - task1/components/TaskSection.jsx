import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from '../styles'
import TaskList from './TaskList'

export default function TaskSection({
  tasks,
  selectedFilter,
  onDeleteTask,
  onToggleTask,
}) {

  return (
    <View style={styles.container}>
      <TaskList
        tasks={tasks}
        selectedFilter={selectedFilter}
        onToggleTask={onToggleTask} 
        onDeleteTask={onDeleteTask} 
      />
    </View>
  )
}
