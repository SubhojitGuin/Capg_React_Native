export default function AboutTextArea({ about, setAbout }) {
  return (
    <div className="student-form-element">
      <label htmlFor="about">About You:</label>
      <textarea id="about" name="about" value={about} onChange={(e) => setAbout(e.target.value)} placeholder="Tell us about yourself"></textarea>
    </div>
  );
}