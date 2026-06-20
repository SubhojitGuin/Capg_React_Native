import { useAuthContext } from './AuthContext';

export default function ProfileCard() {
  const { username, isLoggedIn, toggleLogIn } = useAuthContext();

  function getLoginText(isLoggedIn) {
    return (isLoggedIn) ? "Logged In" : "Logged out";
  }

  return (
    <div class="profile-card">
      <h3>Username: {username}</h3>
      <h3>Login Status: {getLoginText(isLoggedIn)}</h3>
      <button onClick={toggleLogIn}>Login/Logout</button>
    </div>
  )
}
