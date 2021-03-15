import React, { useState } from 'react';

import { FaArrowCircleRight, FaArrowCircleLeft } from 'react-icons/fa';

import GameItem from './GameItem';

import { RESULTS_GAME_PER_PAGE } from '../../config/config';

import './GameList.css';

export default function GameList(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const { games } = props;

  const numberOfPages = games.length / RESULTS_GAME_PER_PAGE;

  console.log(numberOfPages);

  const pagination = (page) => {
    const start = (page - 1) * RESULTS_GAME_PER_PAGE;
    const end = page * RESULTS_GAME_PER_PAGE;

    return games.slice(start, end);
  };

  const nextPage = () => {
    if (currentPage === numberOfPages) return;
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className='game-list'>
      {/* page 1 -> left arrow do not show */}
      {currentPage !== 1 && (
        <FaArrowCircleLeft
          onClick={prevPage}
          className='pagination-arrow pagination-arrow--left'
        />
      )}
      {/* last page -> right arrow do not show */}
      {currentPage !== numberOfPages && (
        <FaArrowCircleRight
          onClick={nextPage}
          className='pagination-arrow pagination-arrow--right'
        />
      )}

      <div>
        {pagination(currentPage).map((game) => (
          <GameItem key={game.gameId} game={game} />
        ))}
      </div>
    </div>
  );
}
