import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { routes } from 'routes';

import AudioPlayerPage from 'pages/AudioPlayerPage';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <header className='App-header'>Welcome! MEditate</header>
        <Switch>
          <Route exact path={routes.audioPlayer} component={AudioPlayerPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
