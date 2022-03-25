import React from 'react';
import { Box } from '@mui/material';
import { Outlet, Navigate } from 'react-router-dom';
import { useLogin } from '../context/LoginManager.jsx';

export function PrivateRoute() {
  const { auth } = useLogin();

  return auth ? <Outlet /> : <Navigate to="/" />;
}

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
      {auth ? <Navigate to="/lobby" /> : <Outlet />}
    </Box>
  );
}
