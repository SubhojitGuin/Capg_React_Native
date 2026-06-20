export default function CourseDropdown({ course, setCourse }) {
  return (
    <div className="student-form-element">
      <label htmlFor="course">Course Preference:</label>
      <select id="course" name="course" value={course} onChange={(e) => setCourse(e.target.value)}>
        <option value="">Select a course</option>
        <option value="React">React</option>
        <option value="Angular">Angular</option>
        <option value="Java">Java</option>
        <option value="Python">Python</option>
      </select>
    </div>
  );
}