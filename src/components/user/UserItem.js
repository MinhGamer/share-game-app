import React from 'react';
import { Link } from 'react-router-dom';

import './UserItem.css';

export default function UserItem(props) {
  const { name, avatar, games } = props.user;

  return (
    <div className='user-item'>
      <Link to='/u1/games'>
        <img src={avatar} alt='game' />
        <div className='user-item__info'>
          <p className='user-item__name'>{name}</p>
          <p className='user-item__places'>{games.length} place(s)</p>
        </div>
      </Link>
    </div>
  );
}
