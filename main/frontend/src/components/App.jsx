import React from 'react';
import { Container, Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useLogin } from '../context/LoginManager.jsx';
import SignIn from './SignIn.jsx';
import SignUp from './SignUp.jsx';
import MessageCenter from './MessageCenter.jsx';

function App() {
  const { user } = useLogin();

  return (
    <Container style={{ height: '100%' }}>
      <Box
        component="div"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          border: 'solid',
        }}
      >
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
      </Box>
    </Container>
  );
}

export default App;
