import React, { Component } from 'react';

import ListItem from './listitem';

class UserPollsList extends Component {
  constructor(props) {
    super(props);
  }

  _handleDelete = (e) => {
    const { pollId } = e.target.dataset;
    console.log('_handleDelete', pollId);
  };

  render() {
    const { polls } = this.props;

    return (
      <div>
        {
          polls.map((p, i) =>
            <ListItem
              key={i}
              title={p.title}
              id={p._id}
              onDelete={this._handleDelete}
            />
          )
        }
      </div>
    );
  }
}

export default UserPollsList;
