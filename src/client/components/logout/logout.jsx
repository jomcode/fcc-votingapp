import React, { Component } from 'react';
import { withRouter } from 'react-router';

class Logout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        logout.jsx
      </div>
    );
  }
}

Logout = withRouter(Logout);

export default Logout;
