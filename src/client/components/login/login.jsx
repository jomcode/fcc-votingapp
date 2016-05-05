import React, { Component } from 'react';
import { withRouter } from 'react-router';

import LoginForm from './loginform';

class Login extends Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    const { router } = this.props;
    if (this.props.isAuthenticated) router.push('profile');
  }

  _handleLogin = (data) => {
    const { actions: { loginUser }, dispatch } = this.props;
    const { username, password } = data;
    if (!username || !password) return;
    dispatch(loginUser(username, password));
  };

  _renderLoading = () => {
    return (<p>Logging in...</p>);
  };

  render() {
    const { login: { isFetching } } = this.props;

    return (
      <div>
        <h1>Log In</h1>
        {
          isFetching ?
            this._renderLoading() :
            <LoginForm onSubmit={this._handleLogin} />
        }
      </div>
    );
  }
}

Login = withRouter(Login);

export default Login;
