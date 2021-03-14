import './App.css';

import { BrowserRouter, Route } from 'react-router-dom';
import UsersPage from './pages/user/UsersPage';
import GamesPage from './pages/game/GamesPage';
import AddGamePage from './pages/game/AddGamePage';
import Header from './shared/components/Navigation/Header';

function App() {
  return (
    <div className='app-background'>
      <div className='app-background-overlay'>
        <BrowserRouter>
          <Header />
          <Route path='/' exact component={UsersPage} />
          <Route path='/:userId/games' exact component={GamesPage} />
          <Route path='/:userId/add-game' exact component={AddGamePage} />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
