import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class EditForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { fields: { newChoices }, handleSubmit } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <button type="button" onClick={() => newChoices.addField()}>Add Choice</button>

            {
              newChoices.map((c, i) =>
                <div key={i}>
                  <h4>New Choice #{i + 1}</h4>
                  <div>
                    <label htmlFor={`choice${i + 1}`}>Description</label>
                    <input
                      {...c.description}
                      id={`choice${i + 1}`}
                      name={`choice${i + 1}`}
                      type="text"
                    />
                  </div>
                </div>
              )
            }
          </div>

          <div>
            <button type="submit">Save Changes</button>
          </div>
        </form>
      </div>
    );
  }
}

EditForm = reduxForm({
  form: 'editPoll',
  fields: ['newChoices[].description']
})(EditForm);

export default EditForm;
