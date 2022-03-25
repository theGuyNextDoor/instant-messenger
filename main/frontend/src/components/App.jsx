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
            <Route path="/chat" element={<MessageCenter title="chat" />} />
            <Route path="/messages/:id" element={<MessageCenter title="messages" />} />
          </Route>
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
