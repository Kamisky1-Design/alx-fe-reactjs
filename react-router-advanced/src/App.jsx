// src/App.jsx

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import PostDetail from './pages/PostDetail';
import ProtectedRoute from './components/ProtectedRoute';

// Update this line to import the default 'Profile' and the named exports:
import Profile, { ProfileDetails, ProfileSettings } from './components/Profile'; 


export default function App() {
  return (
    <BrowserRouter> {/* Using BrowserRouter as a component */}
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

        {/* Nested Routes Setup using the single Profile component file */}
        <Route path="/profile" element={<Profile />}>
          <Route index element={<ProfileDetails />} /> 
          <Route path="settings" element={<ProfileSettings />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}
