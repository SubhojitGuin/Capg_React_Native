import AboutTextArea from "./AboutTextArea";
import CourseDropdown from "./CourseDropdown";
import HobbiesCheckbox from "./HobbiesCheckbox";
import NameInput from "./NameInput";
import WelcomeToggle from "./WelcomeToggle";

export default function StudentForm({ name, setName, course, setCourse, hobbies, setHobbies, about, setAbout, welcomeState, setWelcomeState }) {
  return (
    <div className="student-form-container">
      <h2>Student Form</h2>
      <div className="student-form-group">
        <NameInput name={name} setName={setName} />
        <CourseDropdown course={course} setCourse={setCourse} />
        <HobbiesCheckbox hobbies={hobbies} setHobbies={setHobbies} />
        <AboutTextArea about={about} setAbout={setAbout} />
        <WelcomeToggle welcomeState={welcomeState} setWelcomeState={setWelcomeState} />
      </div>
    </div>
  );
}