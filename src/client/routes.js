import React from 'react';
import { Route, IndexRoute } from 'react-router';

import AppContainer from './redux/containers/appcontainer';
import PollsListContainer from './redux/containers/pollslistcontainer';

const routes = (
  <Route path="/" component={AppContainer}>
    <IndexRoute component={PollsListContainer} />
  </Route>
);

export default routes;
