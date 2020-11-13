import React, { useState } from 'react';
import { useRef } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import GridLayout from '~/components/Grid';
import { __appUrl__ } from '~/config';

// Tomorrow finish the form

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& div': {
        padding: '5px 0',
      },
    },
    mainGrid: {
      minHeight: '100vh',
    },
    button: {
      float: 'right',
    },
  })
);

export default function SignUp() {
  const classes = useStyles();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  const [message, setMessage] = useState('');
  async function handleLogin() {
    const response = await fetch(`${__appUrl__}/api/people/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: nameRef.current?.value,
        email: emailRef.current?.value,
        password: passwordRef.current?.value,
      }),
    });

    const json: string = await response.json();
    setMessage(json);
  }

  return (
    <GridLayout>
      <React.Fragment>
        <Grid item xs={4}>
          <Typography variant="h6">{JSON.stringify(message)}</Typography>

          <Typography variant="h4">Login page</Typography>
        </Grid>
        <Grid item xs={4} className={classes.root}>
          <div>
            <TextField
              variant="outlined"
              type="text"
              placeholder="Name"
              inputRef={nameRef}
            />
          </div>
          <div>
            <TextField
              variant="outlined"
              type="text"
              placeholder="email"
              inputRef={emailRef}
            />
          </div>
          <div>
            <TextField
              label="Password"
              type="password"
              placeholder="password"
              variant="outlined"
              inputRef={passwordRef}
            />
          </div>
          <div>
            <Button
              className={classes.button}
              variant="outlined"
              onClick={handleLogin}
            >
              Login
            </Button>
          </div>
        </Grid>
      </React.Fragment>
    </GridLayout>
  );
}
