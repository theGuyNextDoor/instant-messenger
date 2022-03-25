import React from 'react';
import { Container } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PublicRoute, PrivateRoute } from './ProtectedRoute.jsx';
import Login from './Login.jsx';
import MessageCenter from './MessageCenter.jsx';

function App() {
  return (
    <Container style={{ height: '100%' }}>
      <Router>
        <Routes>
          <Route element={<PublicRoute />}>
            <Route path="/" element={<Login title="sign in" />} />
            <Route path="/sign-up" element={<Login title="sign up" />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/lobby" element={<MessageCenter title="lobby" />} />
            <Route path="/chat/:id" element={<MessageCenter title="chat" />} />
          </Route>
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
