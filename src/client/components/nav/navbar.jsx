import React, { Component } from 'react';

import NavLink from './navlink';

class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="navbar">
        <div>
          <span>Voting App</span>
        </div>
        <NavLink to="/" text="Home" isIndex />
        <NavLink to="/signup" text="Signup" />
      </div>
    );
  }
}

export default NavBar;
