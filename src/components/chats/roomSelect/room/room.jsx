import React, {useEffect, useState, useRef} from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../../../modules/firebase/firebase';
import {CircularProgress, IconButton, makeStyles } from '@material-ui/core/';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import clsx from 'clsx';
import {Comment} from './comment/comment';
import { Input } from './input/input';
import './room.css';

const useStyles = makeStyles({
  interface: {
    position: 'absolute',
    top: '-100px',
    right: 0,
  },
  button: {
    display: 'block',
  },
  disable: {
    display: 'none',
  }
})

export const Room = ({rooms}) => {
  const styles = useStyles()
  const id = useParams().id;
  const scrollRef = useRef(null);
  const [comments, setComments] = useState()
  const [messagesLimit, setMessagesLimit] = useState(10);

  useEffect(() => {
    setComments()

    db.collection('chatRooms').doc(id).collection('coments')
      .orderBy('timestamp', 'desc').limit(messagesLimit)
      .onSnapshot(data => {
        const comms = data.docs.reverse()

        setComments(
          comms.map(comment => {            
            return {
              id: comment.id,
              data: comment.data(),
            }
          })
        )
      })
  }, [id, messagesLimit]);

  useEffect(() => {
    setMessagesLimit(10);
  }, [id])

  const scroller = () => {
    scrollRef.current.scrollIntoView()
  }

  const prevMessage = () => {
    setMessagesLimit(messagesLimit+10);
  }

  return (
    <section className='room'>
      {(!comments)?
        (
          <div>
            <CircularProgress />
          </div>
        )
          :
        (
          <div className='room__chat' >
            <div className={styles.interface}>
              <IconButton
                className={styles.button}
                onClick={prevMessage}
              >
                <MoreHorizIcon />
              </IconButton>

              <IconButton 
                className={clsx( 
                  styles.button,
                  {
                    [styles.disable]: messagesLimit <= 10,
                  },
                )}
                onClick={scroller}
              >
                <ArrowDropDownIcon />
              </IconButton>

            </div>

            {comments.map((comment, i, src) => {
              let active = false;

              if (i) {
                if (src[i-1].data.userId === comment.data.userId) {
                  active = true;
                }
              }

              return (
                <Comment
                  data={comment.data}
                  key={comment.id}
                  activeUser={active}
                />
              )
            })}
          </div>
        )
      }

      <Input id={id} scroller={scroller}/>
      <div ref={scrollRef}></div>
    </section>
  )
}
