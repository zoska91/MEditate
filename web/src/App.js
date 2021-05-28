import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { routes } from 'routes';

import AudioPlayerPage from 'pages/AudioPlayerPage';
import MeditationsListPage from 'pages/MeditationsListPage';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <header className='App-header'>Welcome! MEditate</header>
        <Switch>
          <Route exact path={routes.audioPlayer} component={AudioPlayerPage} />
          <Route
            exact
            path={routes.meditationsList}
            component={MeditationsListPage}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
