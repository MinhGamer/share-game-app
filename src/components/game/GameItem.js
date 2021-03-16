import React, { useState } from 'react';

import './GameItem.css';

import Card from '../../shared/components/UI/Card';
import Button from '../../shared/components/UI/Button';
import Modal from '../../shared/components/UI/Modal';

import GameTrailer from './GameTrailer';
import GameForm from './GameForm';
import GameSlider from './GameSlider';

export default function GameItem(props) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
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
    setShowDeleteModal(true);
  };

  const showTrailerHandler = () => {
    setShowTrailer(true);
  };

  const confirmDeleteHandler = () => {
    console.log('confirmDeleteHandler');
  };

  const confirmUpdateHandler = (formUpdate) => {
    console.log(formUpdate);
  };

  return (
    <>
      {/* Update Modal  */}
      <Modal
        showed={showUpdateModal}
        onBackdropClick={() => setShowUpdateModal(false)}>
        <div className='modal-header'>Update Game</div>
        <div className='modal-content'>
          <GameForm
            game={props.game}
            isUpdateMode
            onCancle={() => setShowUpdateModal(false)}
            onSubmit={confirmUpdateHandler}
          />
        </div>
        <div className='modal-footer'></div>
      </Modal>

      {/* Delete Modal */}
      <Modal
        showed={showDeleteModal}
        onBackdropClick={() => setShowDeleteModal(false)}>
        <div className='modal-header'>Are you sure ?</div>
        <div className='modal-content'>
          This deleted item can not be undone!! Do you want to delete anyway?
        </div>
        <div className='modal-footer'>
          <Button onClick={() => setShowDeleteModal(false)} black>
            Canlce
          </Button>
          <Button onClick={confirmDeleteHandler} red>
            Confirm
          </Button>
        </div>
      </Modal>

      {/* Trailer Modal  */}
      <GameTrailer
        showed={showTrailer}
        onBackdropClick={() => setShowTrailer(false)}
      />

      {/* Game Item Card */}
      <div className='game-item'>
        <Card>
          <div className='game-item__image'>
            {/* <img src={images[0]} alt='game' /> */}
            <GameSlider images={images} />
          </div>

          <div>
            <div className='game-item__info'>
              <p>Title: {title || ''}</p>
              <p>Developer: {developer || ''}</p>
              <p>Publisher: {publisher || ''}</p>
              <p>Public Year: {publicYear || ''}</p>
              <p>Rating: {rating || ''}</p>
            </div>

            <p className='game-item__description'>Description: {description}</p>
          </div>
          <Button onClick={showTrailerHandler} blue>
            Trailer
          </Button>
          <Button onClick={() => setShowUpdateModal(true)} green>
            Update
          </Button>
          <Button onClick={deleteGameHandler} red>
            Delete
          </Button>
        </Card>
      </div>
    </>
  );
}
