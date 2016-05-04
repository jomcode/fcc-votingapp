import React, { Component } from 'react';

import ListItem from './listitem';

class UserPollsList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { polls, deleteHandler } = this.props;

    return (
      <div>
        {
          polls.map((p, i) =>
            <ListItem
              key={i}
              title={p.title}
              id={p._id}
              deleteHandler={deleteHandler}
            />
          )
        }
      </div>
    );
  }
}

export default UserPollsList;
