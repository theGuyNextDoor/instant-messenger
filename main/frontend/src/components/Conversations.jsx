import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Card, Typography } from '@mui/material';
import { useUser } from '../context/UserManager.jsx';

function Conversations() {
  const { user, setConversations, conversations, setUser } = useUser();
  const navigate = useNavigate();
  let feed;

  useEffect(() => {
    fetch(`/api/conversations/${user.id}`)
      .then((response) => response.json())
      .then((data) => setConversations(data))
      .catch((err) => console.log(err));
  }, []);

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

  if (conversations.length) {
    feed = conversations.map((conversation) => {
      const { id, groupName, recipients } = conversation;
      const names = groupName === 'null' ? makeName(recipients) : groupName;

      return (
        <Card
          key={id}
          variant="outlined"
          onClick={() => { setUser({ ...user, page: `/messages/${id}` }); runNavigate(`/messages/${id}`); }}
          sx={{
            display: 'flex',
            alignItems: 'center',
            padding: 2,
            marginBottom: 3,
          }}
        >
          <Typography>{names}</Typography>
        </Card>
      );
    });
  }

  return (
    <Box>
      {feed}
    </Box>
  );
}

export default Conversations;
