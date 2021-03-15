import React from 'react';
import ReactDOM from 'react-dom';

import './Backdrop.css';

export default function Backdrop(props) {
  const { showed, onClick } = props;

  let backdrop = null;

  if (showed) {
    backdrop = (
      <div onClick={onClick} className='backdrop'>
        Hi
      </div>
    );
  }

  return ReactDOM.createPortal(
    backdrop,
    document.getElementById('backdrop-hook')
  );
}
