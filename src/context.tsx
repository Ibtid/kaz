import React, { createContext, useState, useContext, ReactNode } from 'react';

interface UserContextProps {
  user: string | null;
  setUser: (user: string | null) => void;
}

const defaultContextValue: UserContextProps = {
  user: null,
  setUser: () => {
    throw new Error('setUser function must be overridden by UserProvider');
  },
};

const UserContext = createContext<UserContextProps>(defaultContextValue);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string | null>("");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextProps => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }

  return context;
};