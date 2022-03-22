import React, { useState } from 'react';
import { Grid, TextField, Button } from '@mui/material';

function Signup() {
  const [signupInfo, setSignupInfo] = useState({ firstName: '', lastName: '', email: '', password: '' });

  return (
    <Grid container align="center">
      <Grid item xs={12}>
        <TextField
          name="f"
        />
      </Grid>
    </Grid>
  );
}

export default Signup;
