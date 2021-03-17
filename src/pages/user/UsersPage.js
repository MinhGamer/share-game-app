import React, { useEffect } from 'react';

import UserList from '../../components/user/UserList';

import LoadingSpinner from '../../shared/components/UI/LoadingSpinner';

import useHttp from '../../shared/customHooks/useHttp';

const DUMMY_USERS = [
  {
    userId: '1',
    name: 'Minh',
    email: 'minh@gmail.com',
    avatar:
      'https://i.pinimg.com/originals/be/f7/6c/bef76c4b9aff3ae24c434cab115f69ad.jpg',
    games: [],
  },
  {
    userId: '2',
    name: 'Thao',
    email: 'thao@gmail.com',
    avatar:
      'https://i.pinimg.com/originals/46/df/11/46df1109b07aeda4ba471ef7361ba67f.jpg',
    games: [],
  },
];

export default function UsersPage() {
  const { sendRequest, isLoading, error } = useHttp();

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await sendRequest('/user/users');
      console.log(data);
    };

    fetchUsers();
  });

  console.log();

  return (
    <div className='user-list'>
      <UserList users={DUMMY_USERS} />
    </div>
  );
}
