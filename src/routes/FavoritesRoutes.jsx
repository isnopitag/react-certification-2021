import React from 'react';
import {  Route, Switch } from 'react-router-dom';
import { FavoritesDetails } from '../components/videos/FavoritesDetails';
import { FavoritesGrid } from '../components/videos/FavoritesGrid';


export const FavoritesRoutes = () => {
  return (
    <>
      <div>
        <Switch>
          <Route exact path="/favorites" component={FavoritesGrid} />
          <Route exact path="/favorites/details" component={FavoritesDetails} />
        </Switch>
      </div>
    </>
  );
};
