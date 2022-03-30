import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Typography } from '@mui/material';
import { useLogin } from '../context/LoginManager.jsx';
import { useUser } from '../context/UserManager.jsx';
import SignIn from './SignIn.jsx';
import SignUp from './SignUp.jsx';

function Login({ title }) {
  const [errMsg, setErrMsg] = useState('');
  const LoginManager = useLogin();
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
          UserManager.setUser(data);
          LoginManager.authenticate(true);
          runNavigate(data.page);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const signIn = (e) => {
    e.preventDefault();
    fetch(`/api/sign-in/${LoginManager.signInInfo.email}/${LoginManager.signInInfo.password}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          console.log(data.error); // ALERT MESSAGE
        } else {
          UserManager.setUser(data);
          LoginManager.authenticate(true);
          runNavigate('/conversations');
        }
      })
      .catch((err) => console.log(err));
    LoginManager.resetSignInCredentials();
  };

  const signUp = (e) => {
    e.preventDefault();
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: LoginManager.signUpInfo.username,
        first_name: LoginManager.signUpInfo.firstName,
        last_name: LoginManager.signUpInfo.lastName,
        email: LoginManager.signUpInfo.email,
        password: LoginManager.signUpInfo.password,
      }),
    };

    fetch('/api/sign-up', options)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          UserManager.setUser({
            username: LoginManager.signUpInfo.username,
            firstName: LoginManager.signUpInfo.firstName,
            lastName: LoginManager.signUpInfo.lastName,
            email: LoginManager.signUpInfo.email,
            online: true,
            page: '/conversations',
          });
          runNavigate('/conversations');
        } else {
          console.log(data.err); // ALERT MESSAGE
        }
      })
      .catch((err) => {
        console.log(err);
      });
    LoginManager.resetSignUpCredentials();
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
