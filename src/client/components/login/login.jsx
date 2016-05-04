import React, { Component } from 'react';

import LoginForm from './loginform';

class Login extends Component {
  constructor(props) {
    super(props);
  }

  _handleLogin = (data) => {
    const { actions: { loginUser }, dispatch } = this.props;
    const { username, password } = data;
    if (!username || !password) return;
    dispatch(loginUser(username, password));
  };

  render() {
    return (
      <div>
        <h1>Log In</h1>
        <LoginForm
          onSubmit={this._handleLogin}
        />
      </div>
    );
  }
}

export default Login;
