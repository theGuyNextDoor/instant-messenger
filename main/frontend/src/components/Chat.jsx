import React from 'react';
import { Box, Card, Typography } from '@mui/material';

const data = [
  { id: 1, sender: 'tim', text: 'hello' },
  { id: 2, sender: 'other', text: 'hey there' },
  { id: 3, sender: 'tim', text: 'another message' },
  { id: 4, sender: 'other', text: 'back at you' },
];

function Chat({ runNavigate }) {
  const messages = data.map((msg) => {
    const { id, sender, text } = msg;
    if (sender === 'tim') {
      return (
        <Box border="solid">
          <Card
            key={id}
            variant="outlined"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              height: 50,
              paddingLeft: 10,
              paddingRight: 10,
              marginBottom: 10,
            }}
          >
            <Typography>{text}</Typography>
          </Card>
        </Box>
      );
    }
    return (
      <Card
        key={id}
        variant="outlined"
        style={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          paddingLeft: 10,
          paddingRight: 10,
          marginBottom: 10,
        }}
      >
        <Typography>{text}</Typography>
      </Card>
    );
  });

  return (
    <Box sx={{
      flex: 1,
    }}
    >
      {messages}
    </Box>
  );
}

export default Chat;
