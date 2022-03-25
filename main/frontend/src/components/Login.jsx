import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Typography } from '@mui/material';
import { useLogin } from '../context/LoginManager.jsx';
import { useUser } from '../context/UserManager.jsx';
import SignIn from './SignIn.jsx';
import SignUp from './SignUp.jsx';

function Login({ title }) {
  const [errMsg, setErrMsg] = useState('');
  const {
    authenticate,
    signInInfo,
    resetSignInCredentials,
    signUpInfo,
    resetSignUpCredentials,
  } = useLogin();
  const UserManager = useUser();
  const navigate = useNavigate();

  const runNavigate = (path) => {
    navigate(path);
  };

  useEffect(() => {
    fetch('/api/current-session')
      .then((response) => response.json())
      .then((data) => {
        if (Object.keys(data).length > 1) {
          UserManager.stageUser(data);
          authenticate(true);
          runNavigate('/lobby');
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const signIn = (e) => {
    e.preventDefault();
    fetch(`/api/sign-in/${signInInfo.email}/${signInInfo.password}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          console.log(data.error); // ALERT MESSAGE
        } else {
          UserManager.stageUser(data);
          authenticate(true);
          runNavigate('/lobby');
        }
      })
      .catch((err) => console.log(err));
    resetSignInCredentials();
  };

  const signUp = (e) => {
    e.preventDefault();
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
          UserManager.stageUser({
            username: signUpInfo.username,
            firstName: signUpInfo.firstName,
            lastName: signUpInfo.lastName,
            email: signUpInfo.email,
            online: true,
          });
          runNavigate('/lobby');
        } else {
          console.log(data.err); // ALERT MESSAGE
        }
      })
      .catch((err) => {
        console.log(err);
      });
    resetSignUpCredentials();
  };

  return (
    <Grid
      container
      align="center"
      direction="column"
      rowSpacing={2}
    >
      <Grid item>
        <Typography variant="h4" component="h4">
          {title}
        </Typography>
      </Grid>

      {title === 'sign in' ? <SignIn signIn={signIn} /> : <SignUp signUp={signUp} />}

    </Grid>
  );
}

export default Login;
