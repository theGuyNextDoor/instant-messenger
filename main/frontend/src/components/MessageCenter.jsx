import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import { useUser } from '../context/UserManager.jsx';
import { useLogin } from '../context/LoginManager.jsx';
import Chat from './Chat.jsx';
import Messages from './Messages.jsx';

function MessageCenter({ title }) {
  const UserManager = useUser();
  const LoginManager = useLogin();

  const logout = () => {
    const options = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: UserManager.user.id,
        online: false,
      }),
    };

    fetch('/api/logout', options)
      .then((response) => {
        if (response.ok) {
          UserManager.stageUser({});
          LoginManager.authenticate(false);
        } else {
          console.log('User not found'); // ALERT MESSAGE
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          width: '100%',
          marginBottom: 4,
        }}
      >
        <Button onClick={logout}>Logout</Button>
      </Box>

      <Box
        sx={{
          width: '50%',
          height: '60%',
        }}
      >
        <Box sx={{ marginBottom: 3 }}>
          <Typography align="center" variant="h5" component="h5">{title}</Typography>
        </Box>

        <Grid
          container
          direction="column"
          backgroundColor="gray"
          sx={{ height: '100%', padding: 2, overflow: 'auto' }}
        >

          <Grid item>
            {(title === 'chat') && <Chat />}
            {(title === 'messages') && <Messages />}
          </Grid>

        </Grid>
      </Box>
    </>
  );
}

export default MessageCenter;
