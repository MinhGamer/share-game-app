import React from 'react';

import UserItem from './UserItem';

import './UserList.css';

export default function UserList(props) {
  const { users } = props;

  return (
    <div className='user-list'>
      {users.map((user) => (
        <UserItem key={user.userId} user={user} />
      ))}
    </div>
  );
}
