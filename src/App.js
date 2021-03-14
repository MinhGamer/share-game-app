import './App.css';

import { BrowserRouter, Route } from 'react-router-dom';
import UsersPage from './pages/user/UsersPage';
import GamesPage from './pages/game/GamesPage';

function App() {
  return (
    <div className='app-background'>
      <div className='app-background-overlay'>
        <BrowserRouter>
          <Route path='/' exact component={UsersPage} />
          <Route path='/:userId/games' exact component={GamesPage} />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
