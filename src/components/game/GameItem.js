import React from 'react';

import './GameItem.css';

import Card from '../../shared/components/UI/Card';
import Button from '../../shared/components/UI/Button';

export default function GameItem(props) {
  const {
    title,
    description,
    developer,
    publisher,
    publicYear,
    rating,
  } = props.game;

  return (
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
        <Button red>Delete</Button>
      </Card>
    </div>
  );
}
