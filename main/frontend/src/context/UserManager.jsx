import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export function UserProvider({ children }) {
  const [user, setUser] = useState({});
  const [conversations, setConversations] = useState([]);
  const [messages, setMessages] = useState([]);

  const stageUser = (obj) => {
    if (Object.keys(obj).length && obj.page === null) {
      setUser({ ...obj, page: '/conversation' });
    }
    setUser(obj);
  };

  return (
    <UserContext.Provider value={{
      user,
      setUser,

      conversations,
      setConversations,

      messages,
      setMessages,
    }}>
      {children}
    </UserContext.Provider>
  );
}
