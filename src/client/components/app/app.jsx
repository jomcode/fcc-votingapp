import React, { Component } from 'react';

import NavBar from '../nav/navbar';
import Happening from '../happening/happening';

class App extends Component {
  render() {
    const { auth: { isAuthenticated, username } } = this.props;

    return (
      <div>
        <NavBar isAuthenticated={isAuthenticated} username={username} />
        {this.props.children}
      </div>
    );
  }
}

export default App;
