import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Card, Typography } from '@mui/material';
import { useUser } from '../context/UserManager.jsx';

const conversationsData = [
  { id: 0, groupName: null, users: ['AYE YO', 'Big Tim', 'MasterMind', 'AYE YO', 'Big Tim', 'MasterMind', 'AYE YO', 'Big Tim', 'MasterMind'] },
  { id: 1, groupName: 'Squad', users: ['AYE YO', 'Big Tim', 'MasterMind'] },
  { id: 2, groupName: null, users: ['BettyBoop'] },
  { id: 3, groupName: 'FAM', users: ['George', 'Sam', 'Kevin'] },

];

function Conversations() {
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

  function makeName(arr) {
    let nameStr = '';
    const lastUser = arr.length - 1;

    for (let i = 0; i < lastUser; i += 1) {
      if (arr[i] !== user.username) {
        nameStr += `${arr[i]}, `;
      }
    }
    if (arr[lastUser] === user.username) {
      return nameStr.slice(0, nameStr.length - 2);
    }

    return nameStr + arr[lastUser];
  }

  const conversations = conversationsData.map((conversation) => {
    const { id, groupName, users } = conversation;
    const names = makeName(users);

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
        <Typography>{groupName || names}</Typography>
      </Card>
    );
  });

  return (
    <Box>
      {conversations}
    </Box>
  );
}

export default Conversations;
