import React from 'react';
import { useRef } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import GridLayout from '~/components/Grid';

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

export default function Login() {
  const classes = useStyles();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  function handleLogin() {
    console.log(emailRef.current?.value, passwordRef.current?.value);
  }

  return (
    <GridLayout>
      <React.Fragment>
        <Grid item xs={4}>
          {' '}
          <Typography variant="h4">Login page</Typography>
        </Grid>
        <Grid item xs={4} className={classes.root}>
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
