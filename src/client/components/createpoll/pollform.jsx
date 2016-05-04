import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class PollForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      fields: { title, subtitle, choices },
      handleSubmit
    } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Title</label>
            <input {...title} id="title" name="title" type="text" />
          </div>

          <div>
            <label htmlFor="subtitle">Subtitle</label>
            <input {...subtitle} id="subtitle" name="subtitle" type="text" />
          </div>

          <div>
            <h3>Choices</h3>

            <button type="button" onClick={() => choices.addField()}>Add Choice</button>

            {!choices.length && <div>No choices.</div>}

            {
              choices.map((c, i) =>
                <div key={i}>
                  <h4>Choice #{i + 1}</h4>
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
            <button type="submit">Create</button>
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
