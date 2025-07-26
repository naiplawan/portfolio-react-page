'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Simple hardcoded credentials for demo purposes
// In production, this should be handled by a proper authentication service
const ADMIN_CREDENTIALS = {
  username: 'admin',
  password: 'portfolio2025'
};

const AUTH_KEY = 'portfolio_auth';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is already authenticated (only on client side)
    if (typeof window !== 'undefined') {
      const authData = localStorage.getItem(AUTH_KEY);
      if (authData) {
        try {
          const { expiry } = JSON.parse(authData);
          if (Date.now() < expiry) {
            setIsAuthenticated(true);
          } else {
            localStorage.removeItem(AUTH_KEY);
          }
        } catch {
          localStorage.removeItem(AUTH_KEY);
        }
      }
    }
    setLoading(false);
  }, []);

  const login = (username: string, password: string): boolean => {
    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
      const authData = {
        token: 'simple-auth-token',
        expiry: Date.now() + (24 * 60 * 60 * 1000) // 24 hours
      };
      if (typeof window !== 'undefined') {
        localStorage.setItem(AUTH_KEY, JSON.stringify(authData));
      }
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(AUTH_KEY);
    }
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}