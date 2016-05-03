import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class VoteForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { fields: { pollChoice }, handleSubmit, choices } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="pollchoice">Poll Choices</label>
            <select id="pollchoice" {...pollChoice} value={pollChoice.value || ''}>
              <option></option>
              {choices}
            </select>
            <button type="submit">Vote</button>
          </div>
        </form>
      </div>
    );
  }
}

VoteForm = reduxForm({
  form: 'vote',
  fields: ['pollChoice']
})(VoteForm);

export default VoteForm;
