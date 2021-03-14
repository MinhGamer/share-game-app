import React from 'react';
import { Link } from 'react-router-dom';

import './Button.css';

export default function Button(props) {
  //set colors
  const buttonBlue = props.blue && 'button--blue';
  const buttonRed = props.red && 'button--red';
  const buttonGreen = props.green && 'button--green';

  //join all color to a single string
  const buttonStyles = ['button', buttonBlue, buttonRed, buttonGreen].join(' ');

  if (props.to) {
    return (
      <Link
        to={props.to}
        exact={props.exact}
        className={` ${buttonStyles} ${props.className} `}>
        {props.children}
      </Link>
    );
  }

  return (
    <button
      disabled={props.disabled}
      onClick={props.onClick}
      className={` ${buttonStyles} ${props.className} `}>
      {props.children}
    </button>
  );
}
