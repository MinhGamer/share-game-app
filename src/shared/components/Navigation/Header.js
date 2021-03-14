import React from 'react';

import { Link } from 'react-router-dom';

import Logo from '../../../assets/image/logo.jpg';

import NavLinks from './NavLinks';

import './Header.css';

export default function Header() {
  return (
    <header className='header'>
      {/* Logo */}
      <div className='logo'>
        <Link to='/'>
          <img src={Logo} alt='logo' />
        </Link>
      </div>

      <NavLinks />
    </header>
  );
}
