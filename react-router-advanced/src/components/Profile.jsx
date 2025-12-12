// src/components/Profile.jsx
import { Outlet, Link } from 'react-router-dom';

// Define the nested components locally
const ProfileDetails = () => (
  <div>
    <h3>Profile Details</h3>
    <p>View your personal information here.</p>
  </div>
);

const ProfileSettings = () => (
  <div>
    <h3>Profile Settings</h3>
    <p>Manage your account settings and preferences.</p>
  </div>
);

// This is the main default exported component used as the Layout
export default function Profile() {
  return (
    <div>
      <h2>User Profile Area</h2>
      <nav>
        <Link to="/profile">Details</Link> | 
        <Link to="/profile/settings">Settings</Link>
      </nav>
      <hr />
      {/* The Outlet renders the matching child route component here */}
      <Outlet /> 
    </div>
  );
}

// Explicitly export these so App.jsx can import them
export { ProfileDetails, ProfileSettings };
