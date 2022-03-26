import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Card, Typography } from '@mui/material';
import { useUser } from '../context/UserManager.jsx';

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
  const { user } = useUser();
  const navigate = useNavigate();

  const runNavigate = (path) => {
    const options = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: user.id, current_page: path }),
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

  const recipients = data.map((recipient) => {
    const { id, rcpt } = recipient;

    return (
      <Card
        key={id}
        variant="outlined"
        onClick={() => runNavigate(`/messages/${id}`)}
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
