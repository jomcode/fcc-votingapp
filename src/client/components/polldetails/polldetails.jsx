import React, { Component } from 'react';

import Chart from './chart';
import VoteForm from './voteform';

class PollDetails extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { actions, dispatch, params } = this.props;
    dispatch(actions.getPollDetails(params.pollId));
  }

  _renderLoading = () => {
    return (
      <div>
        <p>Loading PollDetails...</p>
      </div>
    );
  };

  _handleVote = (data) => {
    if (!data.pollChoice) return;
    const { params: { pollId }, actions: { vote }, dispatch } = this.props;

    const choiceId = data.pollChoice;
    dispatch(vote(pollId, choiceId));
  };

  render() {
    const { poll, isFetching } = this.props.pollDetails;

    if (isFetching) return this._renderLoading();

    return (
      <div className="polldetails">
        <h2>{poll.title}</h2>
        <p>{poll.subtitle}</p>

        <Chart choices={poll.choices} />

        <VoteForm
          choices={
            poll.choices.map((c, i) =>
              <option key={i} value={c._id}>{c.description}</option>
            )
          }
          onSubmit={this._handleVote}
        />
      </div>
    );
  }
}

export default PollDetails;
