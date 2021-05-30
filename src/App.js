import React from 'react';
import { HashRouter, BrowserRouter, Switch, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.scss';

import { routes } from 'routes';

import AudioPlayerPage from 'pages/AudioPlayerPage';
import MeditationsListPage from 'pages/MeditationsListPage';
import HomePage from 'pages/HomePage';
import MainPage from 'pages/MainPage';
import Layout from 'Layout/Layout';
import CreateMeditationPage from 'pages/CreateMeditationPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Layout>
          <Route exact path={routes.audioPlayer} component={AudioPlayerPage} />
          <Route
            exact
            path={routes.meditationsList}
            component={MeditationsListPage}
          />
          <Route exact path={routes.homePage} component={HomePage} />
          <Route
            exact
            path={routes.createMeditation}
            component={CreateMeditationPage}
          />
          <ToastContainer />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
