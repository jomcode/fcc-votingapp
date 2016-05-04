import React from 'react';
import { Route, IndexRoute } from 'react-router';

import AppContainer from './redux/containers/appcontainer';
import PollsListContainer from './redux/containers/pollslistcontainer';
import PollDetailsContainer from './redux/containers/polldetailscontainer';
import CreatePollContainer from './redux/containers/createpollcontainer';
import LoginContainer from './redux/containers/logincontainer';
import SignUpContainer from './redux/containers/signupcontainer';
import ProfileContainer from './redux/containers/profilecontainer';

const routes = (
  <Route path="/" component={AppContainer}>
    <IndexRoute component={PollsListContainer} />
    <Route path="polls/details/:pollId" component={PollDetailsContainer} />
    <Route path="create" component={CreatePollContainer} />
    <Route path="login" component={LoginContainer} />
    <Route path="signup" component={SignUpContainer} />
    <Route path="profile" component={ProfileContainer} />
  </Route>
);

export default routes;
