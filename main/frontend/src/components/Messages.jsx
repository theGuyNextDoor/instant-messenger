import React from 'react';
import { Box, Card, Typography } from '@mui/material';

const data = [
  { id: 1, sender: 'tim', text: 'hello' },
  { id: 2, sender: 'other', text: 'hey there' },
  { id: 3, sender: 'tim', text: 'another message' },
  { id: 4, sender: 'other', text: 'back at you' },
];

function Messages({ runNavigate }) {
  const messages = data.map((msg) => {
    const { id, sender, text } = msg;
    if (sender === 'tim') {
      return (
        <Box
          key={id}
          sx={{
            display: 'flex',
            justifyContent: 'flex_end',
          }}
        >
          <Typography>{text}</Typography>
        </Box>
      );
    }
    return (
      <Box
        key={id}
      >
        <Typography>{text}</Typography>
      </Box>
    );
  });

  return (
    <Box>
      {messages}
    </Box>
  );
}

export default Messages;
