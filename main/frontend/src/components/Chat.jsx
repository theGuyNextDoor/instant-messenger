import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Card, Typography } from '@mui/material';
import { useUser } from '../context/UserManager.jsx';

const conversationsData = [
  { id: 0, name: 'AYE YO, Big Tim, MasterMind, AYE YO, Big Tim, MasterMind, AYE YO, Big Tim, MasterMind', recepients: ['AYE YO'] },
  { id: 1, name: 'Squad', recepients: ['AYE YO', 'Big Tim', 'MasterMind'] },
  { id: 2, name: 'BettyBoop', recepients: ['BettyBoop'] },
  { id: 3, name: 'FAM', recepients: ['George', 'Sam', 'Kevin'] },

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

  const feed = conversationsData.map((conversation) => {
    const { id, name } = conversation;

    return (
      <Card
        key={id}
        variant="outlined"
        onClick={() => runNavigate(`/messages/${id}`)}
        sx={{
          display: 'flex',
          alignItems: 'center',
          padding: 2,
          marginBottom: 3,
        }}
      >
        <Typography>{name}</Typography>
      </Card>
    );
  });

  return (
    <Box>
      {feed}
    </Box>
  );
}

export default Chat;
