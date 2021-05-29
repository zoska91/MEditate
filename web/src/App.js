import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.scss';

import { routes } from 'routes';

import AudioPlayerPage from 'pages/AudioPlayerPage';
import MeditationsListPage from 'pages/MeditationsListPage';
import Layout from 'Layout/Layout';
import CreateMeditationPage from 'pages/CreateMeditationPage';

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
          <Route
            exact
            path={routes.createMeditation}
            component={CreateMeditationPage}
          />
        </Switch>
      </BrowserRouter>
      <ToastContainer />
    </Layout>
  );
}

export default App;
