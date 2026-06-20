import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AddTaskBar from '../components/AddTaskBar'
import FilterTabs from '../components/FilterTabs'
import WelcomeCard from '../components/WelcomeCard'
import TaskSection from '../components/TaskSection'
import Header from '../components/Header'

export default function HomeScreen({
  userName,
  pendingCount,
  selectedFilter,
  setSelectedFilter,
  counts,
  tasks,
  inputValue,
  setInputValue,
  onAddTask,
  onDeleteTask,
  onToggleTask,
  onHeaderPlusPress,
  inputRef,
}) {
  return (
    <View style={styles.homeContainer}>
      <Header onHeaderPlusPress={onHeaderPlusPress} />

      <View style={styles.contentBody}>
        <WelcomeCard 
          userName={userName}
          pendingCount={pendingCount}
        />

        <FilterTabs
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
          counts={counts}
        />

        <TaskSection 
          tasks={tasks}
          selectedFilter={selectedFilter}
          onDeleteTask={onDeleteTask}
          onToggleTask={onToggleTask}
        />
      </View>

      <AddTaskBar
        inputValue={inputValue}
        setInputValue={setInputValue} 
        inputRef={inputRef}
        onAddTask={onAddTask}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
  },
  contentBody: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
  }
})