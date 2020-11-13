import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Button, Toolbar, AppBar} from '@material-ui/core';

import {SideMenu} from './sideMenu/sideMenu'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <SideMenu />
          <Button color="inherit">Main</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}