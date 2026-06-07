import React from 'react'
import './App.css'
import getHOC from './getHOC'
import StudentProfile from './StudentProfile'
import CourseCard from './CourseCard';
import NotificationBox from './NotificationBox';

export default function App() {
  const EnhancedStudentProfile = getHOC(StudentProfile, 'Active', 'lightcoral');
  const EnhancedCourseCard = getHOC(CourseCard, 'Active', 'lightblue');
  const EnhancedNotificationBox = getHOC(NotificationBox, 'Active', 'lightgreen');

  return (
    <div className="App">
      <EnhancedStudentProfile name="Rahul" batch="React Beginners" skill="Components" />
      <EnhancedCourseCard name="React Basics" instructor="Meena" duration="4 weeks" />
      <EnhancedNotificationBox message="Assignment submission closes today at 6 PM." />
    </div>
  )
}
