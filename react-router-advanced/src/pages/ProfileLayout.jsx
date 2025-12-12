// src/pages/ProfileLayout.jsx
import { Outlet, Link } from 'react-router-dom';

export default function ProfileLayout() {
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
