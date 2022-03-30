import React, { useEffect } from 'react';
import { Box, Card, Typography } from '@mui/material';
import { useUser } from '../context/UserManager.jsx';

function Messages() {
  const { user, messages, setMessages } = useUser();
  let feed;

  useEffect(() => {
    fetch(`/api${user.page}`)
      .then((response) => response.json())
      .then((data) => setMessages(data))
      .catch((err) => console.log(err));
  }, []);

  if (messages.length) {
    feed = messages.map((msg) => {
      const { id, text, sender, sentAt } = msg;
      if (sender === user.username) {
        return (
          <Box
            key={id}
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              marginBottom: 3,
            }}
          >
            <Card
              sx={{
                display: 'flex',
                alignItems: 'center',
                maxWidth: '75%',
                padding: 0.5,
                backgroundColor: 'blue',
                borderColor: 'blue',
              }}
            >
              <Typography color="white">{text}</Typography>
            </Card>
          </Box>
        );
      }
      return (
        <Box
          key={id}
          sx={{
            display: 'flex',
            marginBottom: 3,
            maxWidth: '75%',
          }}
        >
          <Card
            sx={{
              display: 'flex',
              alignItems: 'center',
              padding: 0.5,
              backgroundColor: 'gray',
            }}
          >
            <Typography>{text}</Typography>
          </Card>
        </Box>
      );
    });
  }

  return (
    <Box>
      {feed}
    </Box>
  );
}

export default Messages;
