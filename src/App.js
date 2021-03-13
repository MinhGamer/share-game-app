import './App.css';

import { BrowserRouter, Route } from 'react-router-dom';
import UsersPage from './pages/user/UsersPage';

function App() {
  return (
    <div className='app-background'>
      <div className='app-background-overlay'>
        <BrowserRouter>
          <Route path='/' exact component={UsersPage} />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
