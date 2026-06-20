import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import styles from './styles';

export default function App() {

  const [tasks, setTasks] = useState([
    { id: '1', title: 'Learn React Native Events', date: 'May 20, 2024', completed: false },
    { id: '2', title: 'Build To-Do App', date: 'May 21, 2024', completed: false },
    { id: '3', title: 'Practice Styling', date: 'May 22, 2024', completed: false },
    { id: '4', title: 'Explore Prop Drilling', date: 'May 18, 2024', completed: true },
  ]);
  const [taskIdCount, setTaskIdCount] = useState(tasks.length + 1);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [inputValue, setInputValue] = useState('');

  const userName = "Subhojit";
  const inputRef = useRef(null);

  const pendingCount = tasks.filter(task => !task.completed).length;
  const counts = {
    All: tasks.length,
    Pending: pendingCount,
    Completed: tasks.filter(task => task.completed).length,
  }

  const handleAddTask = () => {
    if (inputValue.trim() === '') {
      Alert.alert('Error', 'Task title cannot be empty');
      return;
    }

    const options = { month: 'short', day: '2-digit', year: 'numeric' };
    const today = new Date().toLocaleDateString('en-US', options);

    const newTask = {
      id: String(taskIdCount),
      title: inputValue,
      date: today,
      completed: false,
    }

    setTasks([ ...tasks, newTask ]);
    setInputValue('');
    setTaskIdCount(cnt => cnt + 1);
  }

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  }

  const handleToggleTask = (id) => {
    setTasks(tasks.map(task => 
      (task.id === id) ? { ...task, completed: !task.completed } : task
    ))
  }

  const handleHeaderPlusPress = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    } else {
      Alert.alert('Action', 'Add task input focused');
    }
  }

  return (
    <View style={styles.container}>
      <HomeScreen
        userName={userName}
        pendingCount={pendingCount}
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
        counts={counts}
        tasks={tasks}
        inputValue={inputValue}
        setInputValue={setInputValue}
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
        onToggleTask={handleToggleTask}
        onHeaderPlusPress={handleHeaderPlusPress}
        inputRef={inputRef}
      />
    </View>
  );
}

