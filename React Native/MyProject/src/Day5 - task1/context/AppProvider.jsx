import { View, Text } from 'react-native'
import React from 'react'
import AppContext from './AppContext';
import { announcementsData, eventsData, paymentsData, profileData, requestsData } from '../data/mockData';

export default function AppProvider({ children }) {

  const [ profile, setProfile ] = React.useState(profileData);
  const [ announcements, setAnnouncements ] = React.useState(announcementsData);
  const [ requests, setRequests ] = React.useState(requestsData);
  const [ events, setEvents ] = React.useState(eventsData);
  const [ payments, setPayments ] = React.useState(paymentsData);

  const addRequest = (newRequest) => {
    const date = new Date();

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    const updatedRequest = {
      ...newRequest,
      id: "req" + String(requests.length + 1),
      createdAt: `${year}-${month}-${day}`,
    };
    
    setRequests(prevRequests => [...prevRequests, updatedRequest]);
  }

  const editProfile = (updatedProfile) => {
    setProfile(updatedProfile);
  }

  return (
    <AppContext.Provider value={{ profile, announcements, requests, events, payments, addRequest, editProfile }}>
      {children}
    </AppContext.Provider>
  )
}