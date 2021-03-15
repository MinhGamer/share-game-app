import React, { useState } from 'react';

import './GameSlider.css';

import { FaArrowCircleRight, FaArrowCircleLeft } from 'react-icons/fa';

const DUMMY_GAMES = [
  'https://images.pexels.com/photos/707915/pexels-photo-707915.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/259915/pexels-photo-259915.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/547114/pexels-photo-547114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
];

export default function GameSlider() {
  const [currentSlider, setCurrentSlider] = useState(0);

  const sliderLength = DUMMY_GAMES.length;

  const nextSlide = () => {
    setCurrentSlider(
      currentSlider === sliderLength - 1 ? 0 : currentSlider + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlider((prevSilder) =>
      prevSilder === 0 ? sliderLength - 1 : prevSilder - 1
    );
  };

  return (
    <div className='game-slider'>
      <FaArrowCircleLeft
        onClick={prevSlide}
        className='slider-arrow arrow-left'
      />
      <FaArrowCircleRight
        onClick={nextSlide}
        className='slider-arrow arrow-right'
      />
      {DUMMY_GAMES.map((game, index) => (
        <div
          className={
            currentSlider === index ? 'slider-item--active' : 'slider-item'
          }>
          {currentSlider === index && (
            <img key={index} src={game} alt='slider' />
          )}
        </div>
      ))}
    </div>
  );
}
