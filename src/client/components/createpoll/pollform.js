import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class PollForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Title</label>
            <input id="title" name="title" type="text" />
          </div>
        </form>
      </div>
    );
  }
}

PollForm = reduxForm({
  form: 'createPoll',
  fields: ['title', 'subtitle', 'choices[].description']
})(PollForm);

export default PollForm;
