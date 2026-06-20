import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from '../styles';
import { FlatList } from 'react-native-web';
import TaskItem from './TaskItem';

export default function TaskList({ tasks, selectedFilter, onToggleTask, onDeleteTask }) {

    const filteredTasks = tasks.filter(task => {
    if (selectedFilter === 'Pending')
      return !task.completed;

    if (selectedFilter === 'Completed')
      return task.completed;

    return true;
  })

  return (
    <FlatList
      data={filteredTasks}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TaskItem
          key={item.id}
          task={item}
          onToggleTask={onToggleTask}
          onDeleteTask={onDeleteTask}
        />
      )}
      style={{ paddingBottom: 20 }}
      showsVerticalScrollIndicator={false}
    />
  )
}
