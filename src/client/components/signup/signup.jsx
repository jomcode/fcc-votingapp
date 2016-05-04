import React, { Component } from 'react';

import SignUpForm from './signupform';

class SignUp extends Component {
  constructor(props) {
    super(props);
  }

  _handleSignUp = (data) => {
    const { actions: { signUpUser }, dispatch } = this.props;
    const { username, password } = data;
    if (!username || !password) return;
    const user = Object.assign({}, { username, password });
    dispatch(signUpUser(user));
  };

  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <SignUpForm
          onSubmit={this._handleSignUp}
        />
      </div>
    );
  }
}

export default SignUp;
