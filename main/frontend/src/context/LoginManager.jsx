import React, { createContext, useContext, useState } from 'react';

const LoginContext = createContext();

export const useLogin = () => useContext(LoginContext);

export function LoginProvider({ children }) {
  const [signUpInfo, setSignUpInfo] = useState({ firstName: '', lastName: '', email: '', password: '' });
  const [signInInfo, setSignInInfo] = useState({ email: '', password: '' });

  const handleSignUpCredentials = (e) => {
    const { name, value } = e.target;

    setSignUpInfo({ ...signUpInfo, [name]: value });
  };

  const resetSignUpCredentials = () => {
    setSignUpInfo({ firstName: '', lastName: '', email: '', password: '' });
  };

  const handleSignInCredentials = (e) => {
    const { name, value } = e.target;

    setSignInInfo({ ...signInInfo, [name]: value });
  };

  const resetSignInCredentials = () => {
    setSignInInfo({ email: '', password: '' });
  };

  return (
    <LoginContext.Provider value={{
      signUpInfo,
      handleSignUpCredentials,
      resetSignUpCredentials,

      signInInfo,
      handleSignInCredentials,
      resetSignInCredentials,
    }}>
      {children}
    </LoginContext.Provider>
  );
}
