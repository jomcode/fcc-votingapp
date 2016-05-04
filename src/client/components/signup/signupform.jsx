import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class SignUpForm extends Component {
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
            <button type="submit">Sign Up</button>
          </div>
        </form>
      </div>
    );
  }
}

SignUpForm = reduxForm({
  form: 'signUp',
  fields: ['username', 'password']
})(SignUpForm);

export default SignUpForm;
