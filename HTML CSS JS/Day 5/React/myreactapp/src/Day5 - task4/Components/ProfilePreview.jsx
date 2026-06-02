export default function ProfilePreview({ name, course, hobbies, about, welcomeState }) {

  function formatHobbies(hobbies) {
    if (hobbies.length === 0) return 'No hobbies selected';
    return hobbies.join(', ');
  }

  function getWelcomeMessage(welcomeState) {
    return welcomeState ? 'Welcome Student!' : 'Have a Great Learning Day!';
  }

  function getCourseDisplay(course) {
    return course ? course : 'No course selected';
  }

  function getNameDisplay(name) {
    return name ? name : 'No name entered';
  }

  function getAboutDisplay(about) {
    return about ? about : 'No description added';
  }

  return (
    <div className="profile-preview-container">
      <h2>Profile Preview</h2>
      <div className="profile-preview-content">
        <p><strong>Name:</strong> {getNameDisplay(name)}</p>
        <p><strong>Course:</strong> {getCourseDisplay(course)}</p>
        <p><strong>Hobbies:</strong> {formatHobbies(hobbies)}</p>
        <p><strong>About:</strong> {getAboutDisplay(about)}</p>
        <p><strong>Welcome Message:</strong> {getWelcomeMessage(welcomeState)}</p>
      </div>
    </div>
  );
}