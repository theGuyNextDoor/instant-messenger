import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export function UserProvider({ children }) {

  return (
    <UserContext.Provider value={{ user, stageUser, unstageUser }}>
      {children}
    </UserContext.Provider>
  );
}
