import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export function ManagerProvider({ children }) {
  const [user, setUser] = useState({});

  const stageUser = (userObj) => {
    setUser(userObj);
  };

  return (
    <UserContext.Provider value={{ user, stageUser }}>
      {children}
    </UserContext.Provider>
  );
}
