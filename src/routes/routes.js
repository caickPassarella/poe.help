import React from 'react';
import Main from '../containers/Main';
import { Route, Switch } from 'react-router-dom';

import routes from './';

const Routes = () => (
  <Main>
    <Switch>
      {routes.map(route => (
        <Route exact path={route.path} component={route.component} />
      ))}
    </Switch>
  </Main>
);

export default Routes