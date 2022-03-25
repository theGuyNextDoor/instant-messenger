import React from 'react';
import { useNavigate } from 'react-router-dom'
import { Box, Card, Typography } from '@mui/material';

const data = [
  { id: 1, rcpt: 'bigtim' },
  { id: 2, rcpt: 'someone' },
  { id: 3, rcpt: 'someone else' },
];

function Chat() {
  const navigate = useNavigate();

  const runNavigate = (path) => {
    navigate(path);
  };

  const recipients = data.map((recipient) => {
    const { id, rcpt } = recipient;

    return (
      <Card
        key={id}
        variant="outlined"
        onClick={() => runNavigate(`/chat/${id}`)}
        style={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          paddingLeft: 10,
          paddingRight: 10,
          marginBottom: 10,
        }}
      >
        <Typography>{rcpt}</Typography>
      </Card>
    );
  });

  return (
    <Box sx={{
      flex: 1,
    }}
    >
      {recipients}
    </Box>
  );
}

export default Chat;
