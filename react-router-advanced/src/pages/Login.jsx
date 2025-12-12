// src/pages/Login.jsx
import { useNavigate } from 'react-router-dom';
import { login } from '../authService';

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate('/dashboard', { replace: true });
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Log In (Simulated)</button>
    </div>
  );
}
