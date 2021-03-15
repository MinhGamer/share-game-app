import React, { useState } from 'react';

import { FaArrowCircleRight, FaArrowCircleLeft } from 'react-icons/fa';

import GameItem from './GameItem';

import {
  RESULTS_GAME_PER_PAGE,
  PAGE_NUMBER_PER_PAGE,
} from '../../config/config';

import './GameList.css';

export default function GameList(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const { games } = props;

  const numberOfPages = games.length / RESULTS_GAME_PER_PAGE;

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

  const renderPageNumbers = () => {
    const pageArr = [];

    for (let i = -1; i < PAGE_NUMBER_PER_PAGE - 1; i++) {
      let pageNumber = currentPage + i;

      if (pageNumber > numberOfPages || pageNumber === 0) {
        continue;
      }

      pageArr.push(
        <span
          onClick={() => gotoPage(pageNumber)}
          className={
            currentPage === pageNumber
              ? 'page-number__item--active'
              : 'page-number__item'
          }>
          {pageNumber}
        </span>
      );
    }

    if (currentPage > numberOfPages - PAGE_NUMBER_PER_PAGE / 2) {
      pageArr.unshift(<span className='page-number__item'>...</span>);
    }

    if (currentPage < numberOfPages - PAGE_NUMBER_PER_PAGE / 2) {
      pageArr.push(<span className='page-number__item'>...</span>);
    }

    return pageArr;
  };

  const gotoPage = (page) => {
    setCurrentPage(page);
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

      {/* page number */}
      <div className='page-number'>{renderPageNumbers()}</div>
    </div>
  );
}
