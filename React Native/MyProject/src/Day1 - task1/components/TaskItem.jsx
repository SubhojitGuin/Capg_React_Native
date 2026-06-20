import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Card, Checkbox, MD3Colors, Text } from 'react-native-paper'
import styles, { checkboxCheckColor, primaryColor } from '../styles'
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons'

export default function TaskItem({ task, onToggleTask, onDeleteTask }) {
  return (
    <Card mode='elevated' style={[styles.taskItem, task.completed && styles.taskItemCompleted]}>
      <Card.Content style={styles.taskItemContentContainer}>
        <View style={styles.taskItemContent}>
          <Checkbox
            status={task.completed ? 'checked' : 'unchecked'}
            onPress={() => onToggleTask(task.id)}
            uncheckedColor={primaryColor}
            color={checkboxCheckColor}
          />

          <View style={{ flex: 1 }}>
            <Text variant='titleSmall' style={[task.completed && styles.taskItemTitleCompleted]}>
              {task.title}
            </Text>
            <View style={styles.dateBox}>
              <MaterialDesignIcons name='calendar-blank-outline' size={15} color={MD3Colors.neutral50} />
              <Text variant='labelSmall' style={{ color: MD3Colors.neutral50 }}>{task.date}</Text>
            </View>
          </View>
        </View>
        <MaterialDesignIcons name='trash-can-outline' size={24} onPress={() => onDeleteTask(task.id)} color={MD3Colors.error50} />
      </Card.Content>
    </Card>
  )
}
