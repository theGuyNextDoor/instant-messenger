import React, { useState } from 'react';
import { Grid, Typography, TextField, Button } from '@mui/material';

function Login() {
  const [loginInfo, setLoginInfo] = useState({ email: '', password: '' });

  const handleChangeLogin = (e) => {
    const { name } = e.target;
    const { value } = e.target;

    setLoginInfo({ ...loginInfo, [name]: value });
  };

  const loginUser = () => {
    fetch('/api/login')
      .then((respones) => console.log(respones));
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
          label="email"
          variant="outlined"
          value={loginInfo.email}
          onChange={handleChangeLogin}
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          name="password"
          label="password"
          variant="outlined"
          value={loginInfo.password}
          onChange={handleChangeLogin}
        />
      </Grid>
      <Grid item xs={12}>
        <Button onClick={loginUser}>Login</Button>
      </Grid>

    </Grid>
  );
}

export default Login;
