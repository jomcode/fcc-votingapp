import React, { Component } from 'react';

import PollChart from './pollchart';

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

  render() {
    const { poll, isFetching } = this.props.pollDetails;

    if (isFetching) return this._renderLoading();

    return (
      <div>
        <p>title: {poll.title}</p>
        <p>subtitle: {poll.subtitle}</p>

        <PollChart choices={poll.choices} />
      </div>
    );
  }
}

export default PollDetails;
