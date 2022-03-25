import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Chat from './Chat.jsx';
import Messages from './Messages.jsx';

function MessageCenter({ title }) {
  const logout = () => {
    console.log('logged out');
  };

  return (
    <Box
      component="div"
      // border="solid"

      sx={{
        // display: 'flex',
        // justifyContent: 'center',
        // alognItems: 'center',
        width: '100%',
        height: '100%',
      }}
    >
      <Box
        border="solid"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alognItems: 'center',
          width: '100%',
          height: '100%',
        }}
      >
        <Button onClick={logout}>Logout</Button>

        <Box
          sx={{
            paddingLeft: 2,
            paddingTop: 2,
            paddingRight: 2,
            width: '50%',
            height: '80%',
            backgroundColor: 'gray',
          }}
        >
          <Box sx={{ height: '100%' }}>
            <Typography align="center" variant="h5" component="h5">{title}</Typography>
            {(title === 'chat') && <Chat />}
            {(title === 'messages') && <Messages />}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default MessageCenter;
