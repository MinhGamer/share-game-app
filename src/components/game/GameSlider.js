import React, { useState } from 'react';

import './GameSlider.css';

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function GameSlider(props) {
  const [currentSlider, setCurrentSlider] = useState(0);

  const sliderLength = props.images.length;

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
      <FaArrowLeft onClick={prevSlide} className='slider-arrow arrow-left' />
      <FaArrowRight onClick={nextSlide} className='slider-arrow arrow-right' />
      {props.images.map((game, index) => (
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
