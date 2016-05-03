import React, { Component } from 'react';

import './polldetails.scss';
import PollChoice from './pollchoice';

class PollDetails extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { actions, dispatch, params } = this.props;
    dispatch(actions.getPollDetails(params.pollId));
  }

  componentDidMount() {
    // const { actions, dispatch, params } = this.props;
    // dispatch(actions.getPollDetails(params.pollId));
  }

  _renderLoading = () => {
    return (
      <div>
        <p>Loading PollDetails...</p>
      </div>
    );
  };

  render() {
    const { poll, isFetching } = this.props.pollDetails;

    if (isFetching) return this._renderLoading();

    return (
      <div>
        <p>title: {poll.title}</p>
        <p>subtitle: {poll.subtitle}</p>

        {
          poll.choices ? poll.choices.map((c, i) =>
            <PollChoice
              key={i}
              description={c.description}
              votes={c.votes}
              id={c._id}
            />) : null
        }

      </div>
    );
  }
}

export default PollDetails;
