import React, { createContext, useState, useEffect } from 'react';
import { authService } from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initAuth = () => {
      const currentUser = authService.getCurrentUser();
      if (currentUser) {
        setUser(currentUser);
        setRole(currentUser.role);
      }
      setLoading(false);
    };
    initAuth();
  }, []);

  const login = async (email, password, roleType) => {
    setLoading(true);
    try {
      const { user: loggedInUser } = await authService.login(email, password, roleType);
      setUser(loggedInUser);
      setRole(loggedInUser.role);
      return loggedInUser;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      await authService.logout();
      setUser(null);
      setRole(null);
    } finally {
      setLoading(false);
    }
  };

  const switchRole = async (newRole) => {
    const demoUsers = authService.getDemoUsers();
    const demoUser = demoUsers[newRole];
    if (demoUser) {
      return await login(demoUser.email, demoUser.password, newRole);
    }
    throw new Error(`Demo user for role ${newRole} not found`);
  };

  const value = {
    user,
    role,
    isAuthenticated: !!user,
    loading,
    login,
    logout,
    switchRole
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading ? children : <div className="auth-loading">Loading...</div>}
    </AuthContext.Provider>
  );
};
