import React from 'react';

import GameItem from './GameItem';

import './GameList.css';

export default function GameList(props) {
  const { games } = props;

  return (
    <div className='game-list'>
      {games.map((game) => (
        <GameItem key={game.gameId} game={game} />
      ))}
    </div>
  );
}
