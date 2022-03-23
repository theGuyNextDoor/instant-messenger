import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useLogin } from '../context/LoginManager.jsx';
import SignIn from './SignIn.jsx';
import SignUp from './SignUp.jsx';
import MessageCenter from './MessageCenter.jsx';

function App() {
  const { user } = useLogin();

  return (
    <Router>
      <Routes>
        {user.online ? (
          <Route path="/" element={<MessageCenter />} />
        ) : (
          <>
            <Route exact path="/" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
