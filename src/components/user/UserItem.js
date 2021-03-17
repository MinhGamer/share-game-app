import React from 'react';
import { Link } from 'react-router-dom';

import './UserItem.css';

export default function UserItem(props) {
  const { name } = props.user;

  return (
    <div className='user-item'>
      <Link to='/u1/games'>
        <img
          src='https://i.pinimg.com/originals/be/f7/6c/bef76c4b9aff3ae24c434cab115f69ad.jpg'
          alt='game'
        />
        <div className='user-item__info'>
          <p className='user-item__name'>{name}</p>
          <p className='user-item__places'>{2} place(s)</p>
        </div>
      </Link>
    </div>
  );
}
