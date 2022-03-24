import React, { useState, useEffect } from 'react';
import { Grid, Typography, TextField, Button, Link, Alert } from '@mui/material';
import { useLogin } from '../context/LoginManager.jsx';

function SignIn() {
  const [errMsg, setErrMsg] = useState('');
  const { signInInfo, handleSignInCredentials, resetSignInCredentials, stageUser } = useLogin();

  useEffect(() => {
    fetch('/api/current-session')
      .then((response) => response.json())
      .then((data) => {
        if (Object.keys(data).length === 1) {
          console.log(data.message);
        } else {
          stageUser(data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const loginUser = () => {
    fetch(`/api/sign-in/${signInInfo.email}/${signInInfo.password}`)
      .then((response) => response.json())
      .then((data) => {
        stageUser(data);
      })
      .catch((err) => Alert(err));
    resetSignInCredentials();
  };

  return (

    <Grid container align="center" style={{ border: 'solid', borderColor: 'red' }}>
      <Grid item xs={12}>
        <Typography variant="h4" component="h4">
          Login
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <form onSubmit={loginUser}>
          <Grid item xs={12}>
            <Grid item xs={12}>
              <TextField
                required
                type="email"
                name="email"
                label="Email"
                value={signInInfo.email}
                onChange={handleSignInCredentials}
              />
            </Grid>

            <Grid item>
              <TextField
                required
                type="password"
                name="password"
                label="Password"
                value={signInInfo.password}
                onChange={handleSignInCredentials}
              />
            </Grid>

            <Grid item>
              <Button type="submit">Login</Button>
            </Grid>
          </Grid>
        </form>
      </Grid>

      <Grid item xs={12}>
        <Typography component="span">Don&#39;t have an account?</Typography>
        <Link href="/sign-up"> SIGN UP</Link>
      </Grid>

    </Grid>
  );
}

export default SignIn;
