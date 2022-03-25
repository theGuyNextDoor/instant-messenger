import React from 'react';
import { Link } from 'react-router-dom';
import {
  Grid,
  Typography,
  TextField,
  Button,
} from '@mui/material';
import { useLogin } from '../context/LoginManager.jsx';

function SignUp({ signUp }) {
  const { signUpInfo, handleSignUpCredentials } = useLogin();

  return (
    <>
      <Grid
        item
        container
        direction="column"
        spacing={1}
        component="form"
        onSubmit={signUp}
      >

        <Grid item>
          <TextField
            required
            name="username"
            label="Username"
            variant="outlined"
            value={signUpInfo.username}
            onChange={handleSignUpCredentials}
          />
        </Grid>

        <Grid item>
          <TextField
            required
            name="firstName"
            label="First Name"
            variant="outlined"
            value={signUpInfo.firstName}
            onChange={handleSignUpCredentials}
          />
        </Grid>

        <Grid item>
          <TextField
            required
            name="lastName"
            label="Last Name"
            variant="outlined"
            value={signUpInfo.lastName}
            onChange={handleSignUpCredentials}
          />
        </Grid>

        <Grid item>
          <TextField
            required
            type="email"
            name="email"
            label="Email"
            variant="outlined"
            value={signUpInfo.email}
            onChange={handleSignUpCredentials}
          />
        </Grid>

        <Grid item>
          <TextField
            required
            type="password"
            name="password"
            label="Password"
            variant="outlined"
            value={signUpInfo.password}
            onChange={handleSignUpCredentials}
          />
        </Grid>

        <Grid item>
          <Button type="submit">Sign Up</Button>
        </Grid>
      </Grid>

      <Grid item>
        <Typography component="span">
          Already have an account?
          {' '}
          <Link to="/" style={{ textDecoration: 'none' }}>SIGN IN</Link>
        </Typography>
      </Grid>
    </>
  );
}

export default SignUp;
