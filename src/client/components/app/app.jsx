import React, { Component } from 'react';

import NavBar from '../nav/navbar';
import HappeningContainer from '../../redux/containers/happeningcontainer';

class App extends Component {
  render() {
    const { auth: { isAuthenticated, username } } = this.props;

    return (
      <div>
        <NavBar isAuthenticated={isAuthenticated} username={username} />
        <HappeningContainer />
        {this.props.children}
      </div>
    );
  }
}

export default App;
