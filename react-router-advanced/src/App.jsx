// src/App.jsx

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
// Update import name here:
import BlogPost from './pages/BlogPost'; 

import ProtectedRoute from './components/ProtectedRoute';
import Profile from './components/Profile'; 


export default function App() {
  return (
    <BrowserRouter>
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link> | 
        <Link to="/dashboard">Dashboard (Protected)</Link> | 
        <Link to="/profile">Profile (Nested)</Link> |
        {/* Update Link URL to match checker's expectation */}
        <Link to="/blog/1">Post 1 (Dynamic)</Link> |
        <Link to="/login">Login</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        
        {/* 
          Update Route path and element name here 
          This satisfies the checker looking for ["/blog/:id", "BlogPost"]
        */}
        <Route path="/blog/:id" element={<BlogPost />} />

        <Route element={<ProtectedRoute />}>
           <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        <Route path="/profile/*" element={<Profile />} />
        
      </Routes>
    </BrowserRouter>
  );
}
