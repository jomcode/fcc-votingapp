import React, { Component } from 'react';
import { Link } from 'react-router';

import PollsListItem from './pollslistitem';

class PollsList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { actions, dispatch } = this.props;
    dispatch(actions.getPolls());
  }

  _renderLoading = () => {
    return (
      <div className="pollslist">
        <p>Loading PollsList...</p>
      </div>
    );
  };

  render() {
    const { polls, isFetching } = this.props.pollsList;

    if (isFetching) return this._renderLoading();

    return (
      <div className="pollslist">
        {
          polls.map((p, i) =>
            <PollsListItem
              key={i}
              id={p._id}
              title={p.title}
              subtitle={p.subtitle}
            />
          )
        }
      </div>
    );
  }
}

export default PollsList;
