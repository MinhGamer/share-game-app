import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

import { AuthContext } from '../../context/authContext';

export default function NavLinks() {
  const auth = useContext(AuthContext);

  return (
    <div className='navlinks'>
      <NavLink exact to='/'>
        Users
      </NavLink>
      <NavLink exact to={`/${auth.userId}/games`}>
        Games
      </NavLink>
      <NavLink exact to='/u1/add-game'>
        Add Game
      </NavLink>
      <NavLink exact to='/auth'>
        Auth
      </NavLink>
    </div>
  );
}
