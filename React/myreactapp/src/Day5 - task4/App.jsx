import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import ProfilePreview from './Components/ProfilePreview';
import StudentForm from './Components/StudentForm';

function App() {

  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [hobbies, setHobbies] = useState([]);
  const [about, setAbout] = useState('');
  const [welcomeState, setWelcomeState] = useState(true);

  return (
    <div className="App">
      <Header />
      <div className="student-info-container">
        <StudentForm 
          name={name}
          setName={setName}
          course={course}
          setCourse={setCourse}
          hobbies={hobbies}
          setHobbies={setHobbies}
          about={about}
          setAbout={setAbout}
          welcomeState={welcomeState}
          setWelcomeState={setWelcomeState}
        />
        <ProfilePreview 
          name={name}
          course={course}
          hobbies={hobbies}
          about={about}
          welcomeState={welcomeState}
        />
      </div>
    </div>
  );
}

export default App;
