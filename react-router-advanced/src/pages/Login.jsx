// src/pages/Login.jsx
import { useNavigate } from 'react-router-dom';
import { login } from '../authService';

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    login(); // Set isAuthenticated = true
    navigate('/dashboard', { replace: true }); // Redirect to dashboard after login
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Log In (Simulated)</button>
    </div>
  );
}
