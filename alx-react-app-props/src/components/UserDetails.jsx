// src/components/UserDetails.jsx
import { useContext } from 'react'; // Import useContext hook
import UserContext from '../UserContext'; // Import the context

function UserDetails() {
  // Consume the context directly, no longer relying on props
  const userData = useContext(UserContext);

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;
