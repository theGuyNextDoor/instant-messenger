import React from 'react';
import { Grid, Typography, TextField, Button } from '@mui/material';
import { useLogin } from '../context/LoginManager.jsx';

function SignIn() {
  const { signInInfo, handleSignInCredentials, resetSignInCredentials } = useLogin();

  const loginUser = () => {
    fetch(`/api/sign-in/${signInInfo.email}/${signInInfo.password}`)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        // NAVIGATE TO CHATS
      })
      .catch((err) => console.log(err));
  };

  return (
    <Grid container align="center">
      <Grid item xs={12}>
        <Typography variant="h4" component="h4">
          Login
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <TextField
          name="email"
          label="Email"
          variant="outlined"
          value={signInInfo.email}
          onChange={handleSignInCredentials}
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          name="password"
          label="Password"
          variant="outlined"
          value={signInInfo.password}
          onChange={handleSignInCredentials}
        />
      </Grid>
      <Grid item xs={12}>
        <Button onClick={loginUser}>Login</Button>
      </Grid>

    </Grid>
  );
}

export default SignIn;
