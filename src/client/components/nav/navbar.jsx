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
        <NavLink to="create" text="New Poll" />
        <NavLink to="profile" text="Profile" />
        <NavLink to="signup" text="Sign Up" />
        <NavLink to="login" text="Log In" />
      </div>
    );
  }
}

export default NavBar;
