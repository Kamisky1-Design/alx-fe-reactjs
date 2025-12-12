// src/authService.js

let isAuthenticated = false;

export const login = () => {
  isAuthenticated = true;
  console.log("User logged in.");
};

export const logout = () => {
  isAuthenticated = false;
  console.log("User logged out.");
};

export const checkAuth = () => {
  return isAuthenticated;
};
