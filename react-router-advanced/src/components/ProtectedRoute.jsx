// src/components/ProtectedRoute.jsx
import { Navigate, Outlet } from 'react-router-dom';
// Import the new hook
import { useAuth } from '../authService.jsx'

export default function ProtectedRoute() {
  // Use the hook to check if a user object exists
  const { user } = useAuth();

  // If a user object exists, they are authenticated.
  return user ? <Outlet /> : <Navigate to="/login" replace />;
}
