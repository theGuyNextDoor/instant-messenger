import React from 'react';
import { Grid, Typography } from '@mui/material';

function MessageCenter() {
  return (
    <Grid container align="center">

      <Grid item xs={12}>
        <Typography variant="h3" component="h3">Messages</Typography>
      </Grid>

    </Grid>
  );
}

export default MessageCenter;
