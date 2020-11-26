import React from 'react';
import ForumIcon from '@material-ui/icons/Forum';
import { IconButton, MenuItem, Menu, CircularProgress, makeStyles } from '@material-ui/core';
import { Route, NavLink } from 'react-router-dom'
import { Room } from './room/room';

const styleUse = makeStyles({
  root: {
    display: 'flex',
  },
  link: {
    textDecoration: 'none',
    color: '#37474f',
  },
  navigation: {
    width: '5px',
  },
  chat: {
    width: 'calc(100% - 5px)',
  }
})

export const RoomSelect = ({rooms}) => {
  const styles = styleUse();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={styles.root}>
      <section className={styles.navigation}>

        <IconButton
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <ForumIcon />
        </IconButton>

        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >

          {!rooms? 
            (
              <div className='login-page'>
                <CircularProgress color="secondary" />
              </div>
            )
              :
            (
              <section>
                <div>
                  {rooms.map(room => (
                    <NavLink
                      key={room.id}
                      to={`/chat/${room.id}`}
                      exact
                      className={styles.link}
                    >
                      <MenuItem onClick={handleClose}>{room.name}</MenuItem>
                    </NavLink>
                    )
                  )}
                </div>
              </section>
            )
          }
        </Menu>
      </section>

      <section className={styles.chat}>
        <Route path="/chat/:id" render={() => (<Room rooms={rooms} />)} />
      </section>

    </div>
  );
}
