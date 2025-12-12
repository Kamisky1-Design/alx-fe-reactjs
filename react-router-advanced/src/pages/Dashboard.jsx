// Import the new hook
import { useAuth } from '../authService.jsx'
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();
  // Get the logout function from the context
  const { user, logout } = useAuth(); // Also grab user to maybe display name

  const handleLogout = () => {
    logout(); // Use the context logout function
    navigate('/', { replace: true });
  };

  return (
    <div>
      <h1>Dashboard (Protected Page)</h1>
      <p>Welcome, {user?.name || 'User'}! If you see this, you are logged in!</p>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
}
