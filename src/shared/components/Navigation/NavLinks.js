import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

export default function NavLinks() {
  return (
    <div className='navlinks'>
      <NavLink exact to='/'>
        Users
      </NavLink>
      <NavLink exact to='/u1/games'>
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
