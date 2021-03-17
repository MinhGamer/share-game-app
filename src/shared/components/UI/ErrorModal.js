import React from 'react';

import Modal from './Modal';
import Button from './Button';

export default function ErrorModal(props) {
  return (
    <Modal onBackdropClick={props.clearError} showed={!!props.error}>
      <h1 className='modal-header'>An error ouccured !!</h1>
      <p className='modal-content'>{props.error}</p>
      <Button onClick={props.clearError} red>
        OK
      </Button>
    </Modal>
  );
}
