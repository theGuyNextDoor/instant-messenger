import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import { LoginProvider } from './context/LoginManager.jsx';
import { UserProvider } from './context/UserManager.jsx';

const mountNode = document.getElementById('app');
ReactDOM.render(
  <LoginProvider>
    <UserProvider>
      <App />
    </UserProvider>
  </LoginProvider>,
  mountNode,
);
