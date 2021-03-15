import React, { useState } from 'react';

import './GameItem.css';

import Card from '../../shared/components/UI/Card';
import Button from '../../shared/components/UI/Button';

import Modal from '../../shared/components/UI/Modal';

export default function GameItem(props) {
  const [showModal, setShowModal] = useState(false);

  const {
    title,
    description,
    developer,
    publisher,
    publicYear,
    rating,
  } = props.game;

  const closeModal = () => {
    setShowModal(false);
  };

  const deleteGameHandler = () => {
    setShowModal(true);
  };

  return (
    <>
      {/* Delete Modal */}
      <Modal showed={showModal} onBackdropClick={closeModal}>
        <div className='modal-header'>Are you sure ?</div>
        <div className='modal-content'>
          This deleted item can not be undone!! Do you want to delete anyway?
        </div>
        <div className='modal-footer'>
          <Button black>Canlce</Button>
          <Button red>Confirm</Button>
        </div>
      </Modal>

      <div className='game-item'>
        <Card>
          <div className='game-item__trailer'>
            <iframe
              title={title}
              src='https://www.youtube.com/embed/2Rxoz13Bthc'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen></iframe>
          </div>

          <div>
            <div className='game-item__info'>
              <p>Title: {title}</p>
              <p>Developer: {developer}</p>
              <p>Publisher: {publisher}</p>
              <p>Public Year: {publicYear}</p>
              <p>Rating: {rating}</p>
            </div>

            <p className='game-item__description'>Description: {description}</p>
          </div>
          <Button blue>Trailer</Button>
          <Button green>Update</Button>
          <Button onClick={deleteGameHandler} red>
            Delete
          </Button>
        </Card>
      </div>
    </>
  );
}
