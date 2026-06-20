import './App.css';
import { useState } from 'react';
import MessageToggle from './MessageToggle';
import Like from './Like'
import LiveTextDisplay from './LiveTextDisplay';
import ColorChanger from './ColorChanger';
import NameCard from './NameCard';
import FontSizeController from './FontSizeController';
import TaskStatus from './TaskStatus';
import GreetingCard from './GreetingCard';

function App() {
  return (
    <div className="App">
      <MessageToggle />
      <hr/>
      <Like />
      <hr/>
      <LiveTextDisplay />
      <hr/>
      <ColorChanger />
      <hr />
      <NameCard />
      <hr />
      <FontSizeController />
      <hr />
      <TaskStatus />
      <hr />
      <GreetingCard />
    </div>
  );
}

export default App;
