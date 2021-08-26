import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import { NavBarContainer } from '../components/MyLayout/NavContainer';
import { FavoritesRoutes } from './FavoritesRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { VideoRoutes } from './VideoRoutes';


export const AppRouter = () => {
  const { logged } = useContext(AuthContext);
  return (
    <Router>
      <div>
      <NavBarContainer />
        <Switch>
          {/* <Route exact path="/login" component={LoginScreen} /> */}
          {/* <Route path="/" component={VideoRoutes} /> */}
          <PrivateRoute path="/favorites" component={FavoritesRoutes} logged={logged} />
          <PublicRoute path="/" component={VideoRoutes} logged={logged} />
        </Switch>
      </div>
    </Router>
  );
};
