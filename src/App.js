import './App.css';

import { BrowserRouter, Route } from 'react-router-dom';
import UsersPage from './pages/user/UsersPage';
import GamesPage from './pages/game/GamesPage';
import AddGamePage from './pages/game/AddGamePage';
import AuthPage from './pages/user/AuthPage';
import Header from './shared/components/Navigation/Header';
import GameSlider from './components/game/GameSlider';

import UploadFile from './shared/components/FormElement/UploadFile';

import { AuthContextWrapper } from './shared/context/authContext';

function App() {
  return (
    <div className='app-background'>
      <div className='app-background-overlay'>
        <BrowserRouter>
          <AuthContextWrapper>
            <Header />
            <Route path='/image-upload' exact component={UploadFile} />
            <Route path='/auth' exact component={AuthPage} />
            <Route path='/game-detail' exact component={GameSlider} />
            <Route path='/' exact component={UsersPage} />

            {/* fetch games by userId */}
            <Route path='/:userId/games' exact component={GamesPage} />

            <Route path='/:userId/add-game' exact component={AddGamePage} />
          </AuthContextWrapper>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
