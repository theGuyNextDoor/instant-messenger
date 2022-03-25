import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export function UserProvider({ children }) {
  const [user, setUser] = useState({});

  const stageUser = (obj) => {
    setUser(obj);
  };

  return (
    <UserContext.Provider value={{ user, stageUser }}>
      {children}
    </UserContext.Provider>
  );
}
