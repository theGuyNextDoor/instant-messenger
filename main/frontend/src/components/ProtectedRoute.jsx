import React from 'react';
import { Box } from '@mui/material';
import { Outlet, Navigate } from 'react-router-dom';
import { useLogin } from '../context/LoginManager.jsx';
import { useUser } from '../context/UserManager.jsx';

export function PublicRoute() {
  const { auth } = useLogin();
  const { user } = useUser();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
      }}
    >
      {!auth ? <Outlet /> : <Navigate to={user.page} />}
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
