import React, { createContext, useContext, useState } from 'react';

const LoginContext = createContext();

export const useLogin = () => useContext(LoginContext);

export function LoginProvider({ children }) {
  const [signUpInfo, setSignUpInfo] = useState({ username: '', firstName: '', lastName: '', email: '', password: '' });
  const [signInInfo, setSignInInfo] = useState({ email: '', password: '' });
  const [user, setUser] = useState({ online: false });

  const handleSignUpCredentials = (e) => {
    const { name, value } = e.target;

    setSignUpInfo({ ...signUpInfo, [name]: value });
  };

  const resetSignUpCredentials = () => {
    setSignUpInfo({ username: '', firstName: '', lastName: '', email: '', password: '' });
  };

  const handleSignInCredentials = (e) => {
    const { name, value } = e.target;

    setSignInInfo({ ...signInInfo, [name]: value });
  };

  const resetSignInCredentials = () => {
    setSignInInfo({ email: '', password: '' });
  };

  const stageUser = (obj) => {
    setUser(obj);
  };

  const unstageUser = () => {
    setUser({ online: false });
  };

  return (
    <LoginContext.Provider value={{
      signUpInfo,
      handleSignUpCredentials,
      resetSignUpCredentials,

      signInInfo,
      handleSignInCredentials,
      resetSignInCredentials,

      user,
      stageUser,
      unstageUser,
    }}>
      {children}
    </LoginContext.Provider>
  );
}
