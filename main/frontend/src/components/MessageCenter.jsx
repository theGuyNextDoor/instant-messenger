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
    <Grid
      container
      direction="column"
      style={{ height: '100%' }}

      border="solid"
    >
      <Grid item align="right">
        <Button onClick={logout}>Logout</Button>
      </Grid>

      <Grid
        item
        container
        direction="column"
        border="solid"
      >
        <Grid item>
          <Typography align="center" variant="h5" component="h5">{title}</Typography>
        </Grid>

        {(title === 'chat') && <Chat />}
        {(title === 'messages') && <Messages />}
      </Grid>
    </Grid>
  );
}

export default MessageCenter;
