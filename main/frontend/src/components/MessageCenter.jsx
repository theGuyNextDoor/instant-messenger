import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Grid, Typography, Button } from '@mui/material';
import { useUser } from '../context/UserManager.jsx';
import { useLogin } from '../context/LoginManager.jsx';
import Conversations from './Conversations.jsx';
import Messages from './Messages.jsx';

function MessageCenter({ title }) {
  const UserManager = useUser();
  const LoginManager = useLogin();
  const navigate = useNavigate();

  const logout = () => {
    const options = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: UserManager.user.id, current_page: '/conversations' }),
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

  const runNavigate = (path) => {
    const options = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: UserManager.user.id, current_page: path }),
    };

    fetch('/api/update-page', options)
      .then((response) => {
        if (response.ok) {
          navigate(path);
        } else {
          console.log('Sorry, something went wrong'); // ALERT MESSAGE
        }
      });
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          marginBottom: 4,
        }}
      >
        <Button
          disabled={title === 'conversations' ? true : false}
          onClick={() => runNavigate('/conversations')}
        >
          <Typography>back</Typography>
        </Button>
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
          backgroundColor="lightgray" // MESSAGE CENTER COLOR HERE
          sx={{ height: '100%', padding: 2, overflow: 'auto' }}
        >

          <Grid>
            {(title === 'conversations') && <Conversations />}
            {(title === 'messages') && <Messages />}
          </Grid>

        </Grid>
      </Box>
    </>
  );
}

export default MessageCenter;
