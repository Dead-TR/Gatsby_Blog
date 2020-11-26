import React, {useState, useEffect} from 'react';
import {db, } from '../../modules/firebase/firebase';
import {RoomSelect} from './roomSelect/roomSelect';


export const Chat = () => {

  const [rooms, setrooms] = useState();

  useEffect(() => {
    db.collection('chatRooms')
      .onSnapshot(rooms => {
        setrooms(
          rooms.docs.map(room => ({
            id: room.id,
            name: room.data().name,
          }))
        )
      })
  }, []);

  return (
    <section className='chatRooms'>
      <RoomSelect rooms={rooms} />
    </section>
  )
}
