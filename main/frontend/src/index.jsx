import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import { LoginProvider } from './context/LoginManager.jsx';

const mountNode = document.getElementById('app');
ReactDOM.render(
  <LoginProvider>
    <App />
  </LoginProvider>,
  mountNode,
);
