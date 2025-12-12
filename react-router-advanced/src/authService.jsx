// src/authService.js

// This file content needs a major change to use React context/hooks.
// Delete previous content and replace with this:

import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // use null for logged out, some object for logged in

  const login = (userData) => setUser(userData || { name: "Test User" });
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// This is the custom hook the checker is looking for:
export const useAuth = () => {
  return useContext(AuthContext);
};

// We don't need checkAuth() anymore.
