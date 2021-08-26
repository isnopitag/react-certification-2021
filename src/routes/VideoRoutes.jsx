import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { LoginScreen } from '../components/myLogin/LoginScreen';
import { YoutubeDetails } from '../components/videos/YoutubeDetails';
import HomePage from '../pages/Home';


export const VideoRoutes = () => {
  return (
    <>
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/details" component={YoutubeDetails} />
          <Route exact path="/login" component={LoginScreen} />
        </Switch>
      </div>
    </>
  );
};
