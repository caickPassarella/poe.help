import React from 'react';
import Main from '../containers/Main';
import { Route, Switch } from 'react-router-dom';

import routes from './';

const Routes = () => (
  <Main>
    <Switch>
      {routes.map((route, i) => (
        <Route key={i} exact path={route.path} component={route.component} />
      ))}
    </Switch>
  </Main>
);

export default Routes