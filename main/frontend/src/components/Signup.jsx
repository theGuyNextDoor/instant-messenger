import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Typography, TextField, Button, Link } from '@mui/material';
import { useLogin } from '../context/LoginManager.jsx';

function SignUp() {
  const [errMsg, setErrMsg] = useState('');
  const { signUpInfo, handleSignUpCredentials, resetSignUpCredentials, stageUser } = useLogin();
  const navigate = useNavigate();

  const signUpUser = () => {
    console.log('did it');
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: signUpInfo.username,
        first_name: signUpInfo.firstName,
        last_name: signUpInfo.lastName,
        email: signUpInfo.email,
        password: signUpInfo.password,
        online: true,
      }),
    };

    fetch('/api/sign-up', options)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          stageUser({
            username: signUpInfo.username,
            firstName: signUpInfo.firstName,
            lastName: signUpInfo.lastName,
            email: signUpInfo.email,
            online: true,
          });
          const path = '/';
          navigate(path);
        } else {
          console.log(data);
        }
      })
      .catch((err) => {
        console.log(err); // DELETE ME
      });
    resetSignUpCredentials();
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
          name="username"
          label="Username"
          variant="outlined"
          value={signUpInfo.username}
          onChange={handleSignUpCredentials}
        />
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

      <Grid item xs={12}>
        <Typography component="span">Already have an account?</Typography>
        <Link href="/"> SIGN IN</Link>
      </Grid>


    </Grid>
  );
}

export default SignUp;
