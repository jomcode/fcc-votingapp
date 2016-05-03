import React, { Component } from 'react';
import { Link } from 'react-router';

import './pollslist.scss';
import PollsListItem from './pollslistitem';

class PollsList extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { actions, dispatch } = this.props;
    dispatch(actions.getPolls());
  }

  componentDidMount() {
    // const { actions, dispatch } = this.props;
    // dispatch(actions.getPolls());
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
            <Link key={i} to={`/polls/${p._id}`}>
              <PollsListItem
                title={p.title}
                subtitle={p.subtitle}
              />
            </Link>
          )
        }
      </div>
    );
  }
}

export default PollsList;
