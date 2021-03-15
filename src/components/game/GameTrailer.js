import React from 'react';

import Backdrop from '../../shared/components/UI/Backdrop';

import './GameTrailer.css';

export default function GameTrailer(props) {
  const { showed, onBackdropClick } = props;

  return (
    <>
      <Backdrop showed={showed} onClick={onBackdropClick} />
      {showed && (
        <div className='game-trailer'>
          <iframe
            title='game'
            src='https://www.youtube.com/embed/2Rxoz13Bthc'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen></iframe>
        </div>
      )}
    </>
  );
}
