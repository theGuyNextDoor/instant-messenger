import React from 'react';
import { useNavigate } from 'react-router-dom'
import { Box, Card, Typography } from '@mui/material';

const data = [
  { id: 0, rcpt: 'AYE YO' },
  { id: 1, rcpt: 'bigtim' },
  { id: 2, rcpt: 'someone' },
  { id: 3, rcpt: 'someone else' },
  { id: 4, rcpt: 'bigtim' },
  { id: 5, rcpt: 'someone' },
  { id: 6, rcpt: 'someone else' },
  { id: 7, rcpt: 'bigtim' },
  { id: 8, rcpt: 'someone' },
  { id: 9, rcpt: 'someone else' },
  { id: 10, rcpt: 'bigtim' },
  { id: 11, rcpt: 'someone' },
  { id: 12, rcpt: 'someone else' },
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
        sx={{
          height: 60,
          marginBottom: 3,
        }}
      >
        <Typography>{rcpt}</Typography>
      </Card>
    );
  });

  return (
    <Box>
      {recipients}
    </Box>
  );
}

export default Chat;
