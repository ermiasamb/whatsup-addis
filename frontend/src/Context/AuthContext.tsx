"use client";

import { createContext, useState, useContext, ReactNode } from "react";

// Define user type
interface User {
  email: string;
  role: "admin" | "organizer" | "client" | null;
}

interface AuthContextType {
  user: User | null;
  login: (email: string) => void;
  logout: () => void;
}

// Create context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Auth Provider Component
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  // Fake role assignment based on email
  const login = (email: string) => {
    let role: User["role"] = "client";
    if (email.endsWith("@company.com")) role = "admin";
    if (email.endsWith("@org.com")) role = "organizer";

    setUser({ email, role });
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom Hook for using AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
