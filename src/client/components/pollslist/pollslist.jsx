import React, { Component } from 'react';

import './pollslist.scss';

class PollsList extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {}

  componentDidMount() {
    const { actions, dispatch } = this.props;
    dispatch(actions.getPolls());
  }

  _renderLoading = () => {
    return (
      <div>
        <p>Loading PollsList...</p>
      </div>
    );
  };

  render() {
    const { pollsList } = this.props;

    if (pollsList.isFetching) return this._renderLoading();

    return (
      <div>
        {
          pollsList.polls.map((p, i) => <div key={i}>{p.title}</div>)
        }
      </div>
    );
  }
}

export default PollsList;
