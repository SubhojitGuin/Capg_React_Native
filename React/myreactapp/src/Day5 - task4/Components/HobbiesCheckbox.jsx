export default function HobbiesCheckbox({ hobbies, setHobbies }) {

  function handleCheckboxChange(event) {
    const { value, checked } = event.target;
    if (checked) {
      setHobbies([...hobbies, value]);
    } else {
      setHobbies(hobbies.filter(hobby => hobby !== value));
    }
  }

  function isChecked(value) {
    return hobbies.includes(value);
  }

  return (
    <div className="student-form-element student-checkbox-container">
      <label>Hobbies:</label>
      <div className="student-checkbox-group">
        <label>
          <input type="checkbox" name="hobbies" value="Reading" checked={isChecked('Reading')} onChange={handleCheckboxChange} /> Reading
        </label>
        <label>
          <input type="checkbox" name="hobbies" value="Coding" checked={isChecked('Coding')} onChange={handleCheckboxChange} /> Coding
        </label>
        <label>
          <input type="checkbox" name="hobbies" value="Sports" checked={isChecked('Sports')} onChange={handleCheckboxChange} /> Sports
        </label>
        <label>
          <input type="checkbox" name="hobbies" value="Music" checked={isChecked('Music')} onChange={handleCheckboxChange} /> Music
        </label>
      </div>
    </div>
  );
}