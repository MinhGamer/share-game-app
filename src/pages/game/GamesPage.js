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
    rating: '1',
    images: [
      'https://i.gadgets360cdn.com/large/world-of-warcraft_1515269153610.jpg',
      'https://img.pixers.pics/pho(s3:700/PI/10/06/2/700_PI10062_ae538ace086617914e8ddd4f70344041_5b7aba1e617d3_.,700,394,jpg)/stickers-world-of-warcraft.jpg.jpg',
      'https://www.wallpaperup.com/uploads/wallpapers/2014/11/11/513346/d540ea714b78d1ad075e9f481fe0cc35-700.jpg',
    ],
    creator: 'u1',
  },
  {
    gameId: '2',
    title: 'Ori and the Will of the Wish',
    description: 'A perfect game!!!',
    developer: 'Moon Studio',
    publisher: 'Activision',
    publicYear: '2018',
    rating: '2',
    images: [
      'https://i.gadgets360cdn.com/large/world-of-warcraft_1515269153610.jpg',
      'https://img.pixers.pics/pho(s3:700/PI/10/06/2/700_PI10062_ae538ace086617914e8ddd4f70344041_5b7aba1e617d3_.,700,394,jpg)/stickers-world-of-warcraft.jpg.jpg',
      'https://www.wallpaperup.com/uploads/wallpapers/2014/11/11/513346/d540ea714b78d1ad075e9f481fe0cc35-700.jpg',
    ],
    creator: 'u2',
  },
  {
    gameId: '3',
    title: 'Ori and the Will of the Wish',
    description: 'A perfect game!!!',
    developer: 'Moon Studio',
    publisher: 'Activision',
    publicYear: '2018',
    rating: '3',
    images: [
      'https://i.gadgets360cdn.com/large/world-of-warcraft_1515269153610.jpg',
      'https://img.pixers.pics/pho(s3:700/PI/10/06/2/700_PI10062_ae538ace086617914e8ddd4f70344041_5b7aba1e617d3_.,700,394,jpg)/stickers-world-of-warcraft.jpg.jpg',
      'https://www.wallpaperup.com/uploads/wallpapers/2014/11/11/513346/d540ea714b78d1ad075e9f481fe0cc35-700.jpg',
    ],
    creator: 'u3',
  },
  {
    gameId: '4',
    title: 'Ori and the Will of the Wish',
    description: 'A perfect game!!!',
    developer: 'Moon Studio',
    publisher: 'Activision',
    publicYear: '2018',
    rating: '4',
    images: [
      'https://i.gadgets360cdn.com/large/world-of-warcraft_1515269153610.jpg',
      'https://img.pixers.pics/pho(s3:700/PI/10/06/2/700_PI10062_ae538ace086617914e8ddd4f70344041_5b7aba1e617d3_.,700,394,jpg)/stickers-world-of-warcraft.jpg.jpg',
      'https://www.wallpaperup.com/uploads/wallpapers/2014/11/11/513346/d540ea714b78d1ad075e9f481fe0cc35-700.jpg',
    ],
    creator: 'u2',
  },
  {
    gameId: '1',
    title: 'Warcraft',
    description: 'A really good game!!!',
    developer: 'Blizzard',
    publisher: 'Activision',
    publicYear: '2004',
    rating: '1',
    images: [
      'https://i.gadgets360cdn.com/large/world-of-warcraft_1515269153610.jpg',
      'https://img.pixers.pics/pho(s3:700/PI/10/06/2/700_PI10062_ae538ace086617914e8ddd4f70344041_5b7aba1e617d3_.,700,394,jpg)/stickers-world-of-warcraft.jpg.jpg',
      'https://www.wallpaperup.com/uploads/wallpapers/2014/11/11/513346/d540ea714b78d1ad075e9f481fe0cc35-700.jpg',
    ],
    creator: 'u1',
  },
  {
    gameId: '2',
    title: 'Ori and the Will of the Wish',
    description: 'A perfect game!!!',
    developer: 'Moon Studio',
    publisher: 'Activision',
    publicYear: '2018',
    rating: '6',
    images: [
      'https://i.gadgets360cdn.com/large/world-of-warcraft_1515269153610.jpg',
      'https://img.pixers.pics/pho(s3:700/PI/10/06/2/700_PI10062_ae538ace086617914e8ddd4f70344041_5b7aba1e617d3_.,700,394,jpg)/stickers-world-of-warcraft.jpg.jpg',
      'https://www.wallpaperup.com/uploads/wallpapers/2014/11/11/513346/d540ea714b78d1ad075e9f481fe0cc35-700.jpg',
    ],
    creator: 'u2',
  },
  {
    gameId: '3',
    title: 'Ori and the Will of the Wish',
    description: 'A perfect game!!!',
    developer: 'Moon Studio',
    publisher: 'Activision',
    publicYear: '2018',
    rating: '7',
    images: [
      'https://i.gadgets360cdn.com/large/world-of-warcraft_1515269153610.jpg',
      'https://img.pixers.pics/pho(s3:700/PI/10/06/2/700_PI10062_ae538ace086617914e8ddd4f70344041_5b7aba1e617d3_.,700,394,jpg)/stickers-world-of-warcraft.jpg.jpg',
      'https://www.wallpaperup.com/uploads/wallpapers/2014/11/11/513346/d540ea714b78d1ad075e9f481fe0cc35-700.jpg',
    ],
    creator: 'u3',
  },
  {
    gameId: '4',
    title: 'Ori and the Will of the Wish',
    description: 'A perfect game!!!',
    developer: 'Moon Studio',
    publisher: 'Activision',
    publicYear: '2018',
    rating: '8',
    images: [
      'https://i.gadgets360cdn.com/large/world-of-warcraft_1515269153610.jpg',
      'https://img.pixers.pics/pho(s3:700/PI/10/06/2/700_PI10062_ae538ace086617914e8ddd4f70344041_5b7aba1e617d3_.,700,394,jpg)/stickers-world-of-warcraft.jpg.jpg',
      'https://www.wallpaperup.com/uploads/wallpapers/2014/11/11/513346/d540ea714b78d1ad075e9f481fe0cc35-700.jpg',
    ],
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
