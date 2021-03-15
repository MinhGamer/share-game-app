import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import './Modal.css';

import Backdrop from './Backdrop';

import { CSSTransition } from 'react-transition-group';

export default function Modal(props) {
  const { showed, onBackdropClick } = props;

  const modal = (
    <>
      <Backdrop showed={showed} onClick={onBackdropClick} />
      <CSSTransition
        in={showed}
        timeout={200}
        mountOnEnter
        unmountOnExit
        classNames='modal'>
        <div className='modal'>{props.children}</div>
      </CSSTransition>
    </>
  );

  return ReactDOM.createPortal(modal, document.getElementById('modal-hook'));
}
