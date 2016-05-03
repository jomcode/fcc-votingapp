import React from 'react';
import { Route, IndexRoute } from 'react-router';

import AppContainer from './redux/containers/appcontainer';
import PollsListContainer from './redux/containers/pollslistcontainer';
import PollDetailsContainer from './redux/containers/polldetailscontainer';

const routes = (
  <Route path="/" component={AppContainer}>
    <IndexRoute component={PollsListContainer} />
    <Route path="polls/:pollId" component={PollDetailsContainer} />
  </Route>
);

export default routes;
