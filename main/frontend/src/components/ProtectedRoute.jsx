import React from 'react';
import { Box } from '@mui/material';
import { Outlet, Navigate } from 'react-router-dom';
import { useLogin } from '../context/LoginManager.jsx';

export function PublicRoute() {
  const { auth } = useLogin();

  return (
    <Box
      component="div"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
      }}
    >
      {auth ? <Navigate to="/chat" /> : <Outlet />}
    </Box>
  );
}

export function PrivateRoute() {
  const { auth } = useLogin();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%',
        paddingTop: '5%',
      }}
    >
      {auth ? <Outlet /> : <Navigate to="/" />}
    </Box>
  );
}
