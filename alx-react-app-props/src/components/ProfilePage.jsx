// src/components/ProfilePage.jsx
import UserInfo from './UserInfo';

// Remove { userData } from the props destructuring/signature
function ProfilePage() {
  // Remove the userData prop when rendering UserInfo
  return <UserInfo />;
}

export default ProfilePage;
