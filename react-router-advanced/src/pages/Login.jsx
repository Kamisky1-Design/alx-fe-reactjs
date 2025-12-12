import { useNavigate } from 'react-router-dom';
// Import the new hook
import { useAuth } from '../authService.jsx' 

export default function Login() {
  const navigate = useNavigate();
  // Get the login function from the context
  const { login } = useAuth();

  const handleLogin = () => {
    login(); // Use the context login function
    navigate('/dashboard', { replace: true });
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Log In (Simulated)</button>
    </div>
  );
}
