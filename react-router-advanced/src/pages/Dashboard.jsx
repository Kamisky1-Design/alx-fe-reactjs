// src/pages/Dashboard.jsx
import { logout } from '../authService';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/', { replace: true }); // Go home after logging out
  };

  return (
    <div>
      <h1>Dashboard (Protected Page)</h1>
      <p>If you see this, you are logged in!</p>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
}
