import React, { Component } from 'react';

import LoginForm from './loginform';

class Login extends Component {
  constructor(props) {
    super(props);
  }

  _handleLogin = (data) => {
    console.log('_handleLogin->', data);
  };

  render() {
    return (
      <div>
        <LoginForm
          onSubmit={this._handleLogin}
        />
      </div>
    );
  }
}

export default Login;
