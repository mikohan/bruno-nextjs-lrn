import React from 'react';
import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import Link from 'next/link';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

export default function HomePage() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm"></Container>
    </React.Fragment>
  );
}
