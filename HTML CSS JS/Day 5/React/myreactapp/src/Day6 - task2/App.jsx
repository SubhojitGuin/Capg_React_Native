import './App.css';
import { useState } from 'react';
import TodoItem from './TodoItem';
 
function App() {

  const task1 = {title: 'Complete React Assignment', status: 'Pending', priority: 'High'};
  const task2 = {title: 'Complete React Assignment', status: 'Pending', priority: 'Medium'};
  const task3 = {title: 'Revise Props Topic', status: 'Pending', priority: 'Low'};

  return (
    <div class="App">
      <TodoItem task={ task1 } />
      <TodoItem task={ task2 } />
      <TodoItem task={ task3 } />
    </div>
  );
}
 
export default App;