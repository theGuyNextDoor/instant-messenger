import React from 'react';
import { Box, Card, Typography } from '@mui/material';
import { useUser } from '../context/UserManager.jsx';

const messages = [
  { id: 1, sender: 'fake', text: 'hello' },
  { id: 2, sender: 'other', text: 'hey there' },
  { id: 9, sender: 'other', text: 'sldjflkasjf sdkljflkj sadfkjsad klfjsajklhgdhfgn sg jas fds dgj s jsjlf ;asg asdljkg s ldgj s sjkl dfj sd' },
  { id: 3, sender: 'fake', text: 'another message' },
  { id: 4, sender: 'other', text: 'back at you' },
  { id: 5, sender: 'other', text: 'sldjflkasjf sdkljflkj sadfkjsad klfjsajklhgdhfgn sg jas fds dgj s jsjlf ;asg asdljkg s ldgj s sjkl dfj sd' },
  { id: 6, sender: 'fake', text: 'sdfjk sjdfkl askdjfkljds kljdf lls dfkjll dsfkljsdljfklsj dfjsdjfkjs df jlksjdf ' },
  { id: 7, sender: 'other', text: 'back at you' },
  { id: 8, sender: 'fake', text: 'sdfjk sjdfkl askdjfkljds kljdf lls dfkjll dsfkljsdljfklsj dfjsdjfkjs df jlksjdf ' },
  { id: 10, sender: 'other', text: 'sldjflkasjf sdkljflkj sadfkjsad klfjsajklhgdhfgn sg jas fds dgj s jsjlf ;asg asdljkg s ldgj s sjkl dfj sd' },

];

function Messages() {
  const { user } = useUser();

  const thread = messages.map((msg) => {
    const { id, sender, text } = msg;
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

  return (
    <Box>
      {thread}
    </Box>
  );
}

export default Messages;
