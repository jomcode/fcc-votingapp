import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class LoginForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { fields: { username, password }, handleSubmit } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input {...username} type="text" />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input {...password} type="password" />
          </div>

          <div>
            <button type="submit">Log In</button>
          </div>
        </form>
      </div>
    );
  }
}

LoginForm = reduxForm({
  form: 'login',
  fields: ['username', 'password']
})(LoginForm);

export default LoginForm;
