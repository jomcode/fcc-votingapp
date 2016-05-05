import React, { Component } from 'react';

import NavLink from './navlink';

class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { isAuthenticated, username } = this.props;

    return (
      <div className="navbar">
        <div>
          <span>Voting App</span>
        </div>
        <NavLink to="/" text="Home" isIndex />

        {isAuthenticated ? <NavLink to="create" text="New Poll" /> : null}

        {!isAuthenticated ? <NavLink to="signup" text="Sign Up" /> : null}

        {!isAuthenticated ? <NavLink to="login" text="Log In" /> : null}

        {isAuthenticated ? <NavLink to="profile" text="Profile" /> : null}
      </div>
    );
  }
}

export default NavBar;
