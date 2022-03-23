import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export function UserProvider({ children }) {
  const [user, setUser] = useState({ firstName: '', lastName: '' });

  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  );
}
