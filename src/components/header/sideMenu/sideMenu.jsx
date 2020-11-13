import React from 'react';
import {IconButton, Drawer} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import {BarList} from './barList/barList';


export const SideMenu = () =>  {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (open) => () => { //зміна стану (відкритий, прихований)
    setOpen(open);
  };

  return (
    <div>
          <IconButton color="inherit" onClick={toggleDrawer(true)}><MenuIcon /></IconButton> {/*Кнопка, що викликає появу меню */}
          <Drawer open={open} onClose={toggleDrawer(false)}>
            <BarList toggleDrawer={toggleDrawer}/>
          </Drawer>
    </div>
  );
}

