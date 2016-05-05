import React, { Component } from 'react';

import SignUpForm from './signupform';

class SignUp extends Component {
  static contextTypes = { router: React.PropTypes.object };

  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    const {
      context: { router },
      props: { signUp, actions: { resetSignUp }, dispatch }
    } = this;

    if (signUp.user !== null) {
      router.push('/');
      dispatch(resetSignUp());
    }
  }

  _handleSignUp = (data) => {
    const { actions: { signUpUser }, dispatch } = this.props;
    const { username, password } = data;
    if (!username || !password) return;
    const user = Object.assign({}, { username, password });
    dispatch(signUpUser(user));
  };

  _renderLoading = () => {
    return (<p>Signing up...</p>);
  };

  render() {
    const { signUp: { isFetching } } = this.props;

    return (
      <div>
        <h1>Sign Up</h1>
        {
          isFetching ?
            this._renderLoading() :
            <SignUpForm
              onSubmit={this._handleSignUp}
            />
        }
      </div>
    );
  }
}

export default SignUp;
