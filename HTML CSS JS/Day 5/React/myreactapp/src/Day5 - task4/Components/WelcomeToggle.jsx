export default function WelcomeToggle({ welcomeState, setWelcomeState }) {
  return (
    <div className="welcome-toggle-container">
      <button className="toggle-button" onClick={() => setWelcomeState(!welcomeState)}>Toggle Welcome Text</button>
    </div>
  );
}