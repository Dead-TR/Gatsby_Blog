import React, { useContext } from 'react'
import { dateFormatter } from '../../../../../modules/date/dateFormatter';
import { Context } from '../../../../user';

export const Comment = ({data, activeUser}) => {
  const [user] = useContext(Context);
  console.log("🚀 ~ file: comment.jsx ~ line 43 ~ Comment ~ data", data)

  return (
    <div
      className={`
        room__comment ${activeUser? '' : 'room__comment_same-user'}
        ${user.uid === data.userId? 'room__comment_active' : ''}
      `}
    >
      {
        activeUser?
          (<> </>)
            :
          (
            <div className={`
              room__user-data
              ${user.uid === data.userId? 'room__user-data_active' : ''}
            `}>
              <h1 className='room__user-name'>
                {data.user}
              </h1>
              <img
                className='room__user-img'
                src={data.userImg}
                alt={data.user}
              />
            </div>
          )
      }
      <div className='room__message'>
        <p className='room__text'>{data.text}</p>
        <p className='room__timeStamp'>
          {dateFormatter(data.timestamp)}
        </p>
      </div>
    </div>
  )
}
