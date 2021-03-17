import React, { useState, useEffect } from 'react';

import UserList from '../../components/user/UserList';

import LoadingSpinner from '../../shared/components/UI/LoadingSpinner';
import ErrorModal from '../../shared/components/UI/ErrorModal';

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
  const [users, setUsers] = useState([]);

  const { sendRequest, isLoading, error, clearError } = useHttp();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await sendRequest('/user/users');
        setUsers(data.users);
      } catch (err) {}
    };

    fetchUsers();
  }, [sendRequest]);

  return (
    <div className='user-list'>
      {isLoading && <LoadingSpinner asOverlay />}
      {error && <ErrorModal error={error} clearError={clearError} />}
      {!isLoading && users && <UserList users={users} />}
    </div>
  );
}
