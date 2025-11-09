// src/components/UserInfo.jsx
import UserDetails from './UserDetails';

// Remove { userData } from the props destructuring/signature
function UserInfo() {
  // Remove the userData prop when rendering UserDetails
  return <UserDetails />;
}

export default UserInfo;
