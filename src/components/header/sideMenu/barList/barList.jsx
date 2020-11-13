import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {List, Divider, ListItem, ListItemIcon, ListItemText} from '@material-ui/core/';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';

import {Link} from 'gatsby';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  lens: {
    fontSize: 'small',
    color: 'black',
    width: '30px'
  }
});

export const BarList = ({toggleDrawer}) => {
  const styles = useStyles();

  const links = [
    {
      name: 'Home',
      url: '/',
    },
    {
      name: 'Info',
      url: '/info',
    },
  ]

  return (
    <div
      className={styles.list}
      onClick={toggleDrawer(false)}
    >
      <List>  {/* компонент самої менюшки */}
        <Link
          to={'/user'}
          style={{textDecoration: 'none', color: 'inherit'}}
        >
          <ListItem button> {/* ітем менюшки */}

            <ListItemIcon> {/* бокс для іконки ітема */}
              <AccountCircleIcon color='secondary'/> {/* Власне, сама іконка */}
            </ListItemIcon>

            <ListItemText primary={'Account'} /> {/* Текст ітема */}

          </ListItem>
        </Link>
      </List>

      <Divider /> {/* <hr> -- лінія */}

      <List>
        {links.map(({name, url}) => (
          <Link
            to={url}
            style={{textDecoration: 'none', color: 'inherit'}}
            key={url}
          >
            <ListItem button>
              <ListItemIcon>
                {
                  (name === 'Home')? (<HomeIcon/>)
                    :(<InfoIcon/>)
                }
              </ListItemIcon>
              <ListItemText primary={name} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  )
};
