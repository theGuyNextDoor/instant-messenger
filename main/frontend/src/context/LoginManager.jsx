import React, { createContext, useContext, useState } from 'react';

const LoginContext = createContext();

export const useLogin = () => useContext(LoginContext);

export function LoginProvider({ children }) {
  const [signUpInfo, setSignUpInfo] = useState({ username: '', firstName: '', lastName: '', email: '', password: '' });
  const [signInInfo, setSignInInfo] = useState({ email: '', password: '' });
  const [auth, setAuth] = useState(false);

  const handleSignInCredentials = (e) => {
    const { name, value } = e.target;

    setSignInInfo({ ...signInInfo, [name]: value });
  };

  const resetSignInCredentials = () => {
    setSignInInfo({ email: '', password: '' });
  };

  const handleSignUpCredentials = (e) => {
    const { name, value } = e.target;

    setSignUpInfo({ ...signUpInfo, [name]: value });
  };

  const resetSignUpCredentials = () => {
    setSignUpInfo({ username: '', firstName: '', lastName: '', email: '', password: '' });
  };

  const authenticate = (bool) => {
    setAuth(bool);
  };

  return (
    <LoginContext.Provider value={{
      auth,
      authenticate,

      signInInfo,
      handleSignInCredentials,
      resetSignInCredentials,

      signUpInfo,
      handleSignUpCredentials,
      resetSignUpCredentials,
    }}>
      {children}
    </LoginContext.Provider>
  );
}
