import './App.css';
import React from 'react';
import AuthContextProvider from './AuthContext';
import Header from './Header';
import LoginStatus from './LoginStatus';
import WelcomeMessage from './WelcomeMessage';
import ProfileCard from './ProfileCard';

export default function App() {

  return (
    <AuthContextProvider>
      <div className="App">
        <Header/>
        <LoginStatus/>
        <WelcomeMessage/>
        <ProfileCard/>
      </div>
    </AuthContextProvider>
  )
}
