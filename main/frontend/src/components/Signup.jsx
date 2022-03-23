import React from 'react';
import { Grid, Typography, TextField, Button } from '@mui/material';
import { useLogin } from '../context/LoginManager.jsx';

function SignUp() {
  const { signUpInfo, handleSignUpCredentials, resetSignUpCredentials } = useLogin();

  const signUpUser = () => {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        first_name: signUpInfo.firstName,
        last_name: signUpInfo.lastName,
        email: signUpInfo.email,
        password: signUpInfo.password,
      }),
    };
    resetSignUpCredentials();

    fetch('/api/sign-up', options)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err); // DELETE ME
      });
  };

  return (
    <Grid container align="center">
      <Grid item xs={12}>
        <Typography variant="h4" component="h4">
          Sign Up
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <TextField
          name="firstName"
          label="First Name"
          variant="outlined"
          value={signUpInfo.firstName}
          onChange={handleSignUpCredentials}
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          name="lastName"
          label="Last Name"
          variant="outlined"
          value={signUpInfo.lastName}
          onChange={handleSignUpCredentials}
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          name="email"
          label="Email"
          variant="outlined"
          value={signUpInfo.email}
          onChange={handleSignUpCredentials}
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          name="password"
          label="Password"
          variant="outlined"
          value={signUpInfo.password}
          onChange={handleSignUpCredentials}
        />
      </Grid>

      <Grid item xs={12}>
        <Button onClick={signUpUser}>Sign Up</Button>
      </Grid>

    </Grid>
  );
}

export default SignUp;
