import React from 'react';
import { Grid, Box, Typography } from '@mui/material';

function MessageCenter() {
  return (
    <Box
      sx={{
        alignItems: 'center',
        width: '30%',
        height: '70%',
        backgroundColor: 'gray',
      }}
    >
      <Typography variant="h5" component="h5">Messages</Typography>
    </Box>
  );
}

export default MessageCenter;
