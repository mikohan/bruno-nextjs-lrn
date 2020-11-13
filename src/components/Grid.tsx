import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React, { FC } from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minHeight: '100vh',
    },
  })
);

interface GridLayoutProps {
  pageTitle?: string;
  children: any;
}

export default function GridLayout(props: GridLayoutProps) {
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      className={classes.root}
    >
      <Grid item xs={12}>
        {' '}
        <Typography variant="h1">{props.pageTitle}</Typography>
      </Grid>
      {props.children}
    </Grid>
  );
}
