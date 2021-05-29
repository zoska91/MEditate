import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.scss'

import { routes } from 'routes';

import AudioPlayerPage from 'pages/AudioPlayerPage';
import MeditationsListPage from 'pages/MeditationsListPage';
import Layout from 'Layout/Layout';

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Switch>
          <Route exact path={routes.audioPlayer} component={AudioPlayerPage} />
          <Route
            exact
            path={routes.meditationsList}
            component={MeditationsListPage}
          />
        </Switch>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
