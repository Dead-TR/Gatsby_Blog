import React, {useState, useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { IconButton } from '@material-ui/core';
import { Send } from '@material-ui/icons';
import { db } from '../../../../../modules/firebase/firebase';
import { Context } from '../../../../user';

const useStyles = makeStyles({
  root: {
    maxWidth: '720px',
    width: '100%',
    margin: '100px auto 0',
  },
  field: {
    maxWidth: '300px',
    width: 'calc(100% - 50px)'
  }
});

export const Input = ({id, scroller}) => {
  const [user] = useContext(Context);

  const classes = useStyles();
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const submit = (event) => {
    if (value.trim() === '') {
      throw  console.log('empty message')
    }
    event.preventDefault();
  
    db.collection('chatRooms')
      .doc(id)
      .collection('coments')
      .doc()
      .set({
        text: value.trim(),
        timestamp: Date.now(),
        user: user.displayName,
        userImg: user.photoURL,
        userId: user.uid,
      })

    setValue('');
    scroller();
  }

  return (
    <form
      onSubmit={submit}
      className={classes.root}
      noValidate
    >

      <TextField
        id="outlined-textarea"
        label="Message"
        multiline
        variant="outlined"
        rowsMax={4}
        value={value}
        onChange={handleChange}
        color='secondary'
        className={classes.field}
        onKeyUp={(event => {
          if (event.ctrlKey) {
            submit(event);
          }
        })}
      />

      <IconButton type='submit'>
        <Send />
      </IconButton>
    </form>
  );
}
