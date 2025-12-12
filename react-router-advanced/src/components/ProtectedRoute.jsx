// src/components/ProtectedRoute.jsx
import { Navigate, Outlet } from 'react-router-dom';
import { checkAuth } from '../authService';

export default function ProtectedRoute() {
  const isAuth = checkAuth();

  return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
}
