import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextType {
  userEmail: string | null;
  setUserEmail: (email: string | null) => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [userEmail, setUserEmail] = useState<string | null>('john.doe@auy.edu.mm');
  const [isLoading] = useState(false);

  return (
    <AuthContext.Provider value={{ userEmail, setUserEmail, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};


