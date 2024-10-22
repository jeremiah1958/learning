// src/UserContext.js
import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Initialize user as null
  const [isAuthenticated, setIsAuthenticated] = useState()

  const login = (email) => {
    setUser(email); // Store the email (username) in user context
  };

  const logout = () => {
    setUser(null); // Clear the user on logout
  };

  return (
    <UserContext.Provider value={{ user, login, logout, setUser, setIsAuthenticated, isAuthenticated }}>
      {children}
    </UserContext.Provider>
  );
};
