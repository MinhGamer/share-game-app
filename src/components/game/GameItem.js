import React, { useState } from 'react';

import './GameItem.css';

import Card from '../../shared/components/UI/Card';
import Button from '../../shared/components/UI/Button';
import Modal from '../../shared/components/UI/Modal';

import GameTrailer from './GameTrailer';

import GameSlider from './GameSlider';

export default function GameItem(props) {
  const [showModal, setShowModal] = useState(false);

  const [showTrailer, setShowTrailer] = useState(false);

  const {
    title,
    description,
    developer,
    publisher,
    publicYear,
    rating,
    images,
  } = props.game;

  const deleteGameHandler = () => {
    setShowModal(true);
  };

  const showTrailerHandler = () => {
    setShowTrailer(true);
  };

  console.log('rendering');

  return (
    <>
      {/* Delete Modal */}
      <Modal showed={showModal} onBackdropClick={() => setShowModal(false)}>
        <div className='modal-header'>Are you sure ?</div>
        <div className='modal-content'>
          This deleted item can not be undone!! Do you want to delete anyway?
        </div>
        <div className='modal-footer'>
          <Button black>Canlce</Button>
          <Button red>Confirm</Button>
        </div>
      </Modal>

      {/* Trailer   */}
      <GameTrailer
        showed={showTrailer}
        onBackdropClick={() => setShowTrailer(false)}
      />

      <div className='game-item'>
        <Card>
          <div className='game-item__image'>
            {/* <img src={images[0]} alt='game' /> */}
            <GameSlider images={images} />
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
          <Button onClick={showTrailerHandler} blue>
            Trailer
          </Button>
          <Button green>Update</Button>
          <Button onClick={deleteGameHandler} red>
            Delete
          </Button>
        </Card>
      </div>
    </>
  );
}
