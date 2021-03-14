import React from 'react';

import GameList from '../../components/game/GameList';

const DUMMY_GAMES = [
  {
    gameId: '1',
    title: 'Warcraft',
    description: 'A really good game!!!',
    developer: 'Blizzard',
    publisher: 'Activision',
    publicYear: '2004',
    rating: '8',
    creator: 'u1',
  },
  {
    gameId: '2',
    title: 'Ori and the Will of the Wish',
    description: 'A perfect game!!!',
    developer: 'Moon Studio',
    publisher: 'Activision',
    publicYear: '2018',
    rating: '9',
    creator: 'u2',
  },
];

export default function GamesPage() {
  return (
    <h1>
      <GameList games={DUMMY_GAMES} />
    </h1>
  );
}
