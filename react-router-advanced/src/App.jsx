// src/App.jsx

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import PostDetail from './pages/PostDetail';
import ProtectedRoute from './components/ProtectedRoute';

// Import only the default export 'Profile' from the combined file:
import Profile from './components/Profile'; 


export default function App() {
  return (
    <BrowserRouter>
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link> | 
        <Link to="/dashboard">Dashboard (Protected)</Link> | 
        <Link to="/profile">Profile (Nested)</Link> |
        <Link to="/posts/1">Post 1 (Dynamic)</Link> |
        <Link to="/login">Login</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        
        {/* Dynamic Route Example */}
        <Route path="/posts/:postId" element={<PostDetail />} />

        {/* Protected Routes Wrapper */}
        <Route element={<ProtectedRoute />}>
           <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        {/* 
          Single Route for Profile with a wildcard path. 
          The nested routes are now defined inside Profile.jsx using its own <Routes> setup.
        */}
        <Route path="/profile/*" element={<Profile />} />
        
      </Routes>
    </BrowserRouter>
  );
}
