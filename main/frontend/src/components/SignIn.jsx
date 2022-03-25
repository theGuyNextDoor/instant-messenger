import React from 'react';
import { Link } from 'react-router-dom';
import {
  Grid,
  TextField,
  Button,
  Typography,
} from '@mui/material';
import { useLogin } from '../context/LoginManager.jsx';

function SignIn({ signIn }) {
  const { signInInfo, handleSignInCredentials } = useLogin();

  return (
    <>
      <Grid
        item
        container
        direction="column"
        rowSpacing={1}
        component="form"
        onSubmit={signIn}
      >
        <Grid item>
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

      <Grid item>
        <Typography component="span">
          Don&#39;t have an account?
          {' '}
          <Link to="/sign-up" style={{ textDecoration: 'none' }}>SIGN UP</Link>
        </Typography>
      </Grid>
    </>
  );
}

export default SignIn;
