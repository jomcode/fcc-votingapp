import React, { Component } from 'react';

import './polldetails.scss';
import PollChoice from './pollchoice';

class PollDetails extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {}

  componentDidMount() {
    const { actions, dispatch, routeParams } = this.props;
    dispatch(actions.getPollDetails(routeParams.pollId));
  }

  render() {
    const { poll, isFetching } = this.props.pollDetails;

    return (
      <div>
        <p>title: {poll.title}</p>
        <p>subtitle: {poll.subtitle}</p>

      </div>
    );
  }
}

export default PollDetails;
