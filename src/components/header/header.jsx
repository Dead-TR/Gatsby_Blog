import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Button, Toolbar, AppBar} from '@material-ui/core';
import {Link} from 'gatsby';

import {SideMenu} from './sideMenu/sideMenu'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: '1200px',
    margin: '0 auto',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  head: {
    background: '#00796b',
  }
}));

export const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.head}>
          <SideMenu />
          <Link to="/" style={{textDecoration: 'none', color: 'inherit'}}>
            <Button color="inherit">Main</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}