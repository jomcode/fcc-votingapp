import React, { Component } from 'react';

import NavBar from '../nav/navbar';
import NavLink from '../nav/navlink';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        {this.props.children}
      </div>
    );
  }
}

export default App;
