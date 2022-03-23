import React, { useState } from 'react';
import { Grid, Typography, TextField, Button, Link } from '@mui/material';
import { useLogin } from '../context/LoginManager.jsx';

function SignIn() {
  const [errMsg, setErrMsg] = useState('');
  const { signInInfo, handleSignInCredentials, resetSignInCredentials, stageUser } = useLogin();

  const loginUser = () => {
    fetch(`/api/sign-in/${signInInfo.email}/${signInInfo.password}`)
      .then((response) => response.json())
      .then((data) => {
        stageUser(data);
      })
      .catch((err) => console.log(err));
    resetSignInCredentials();
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

      <Grid item xs={12}>
        <Typography component="span">Don&#39;t have an account?</Typography>
        <Link href="/sign-up"> SIGN UP</Link>
      </Grid>

    </Grid>
  );
}

export default SignIn;
