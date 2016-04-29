import React, { Component } from 'react';

class PollsList extends Component {
  constructor(props) {
    super(props);
  }

  _renderLoading = () => {
    return (
      <div>
        <p>Loading</p>
      </div>
    );
  };

  render() {
    const { isFetching } = this.props;

    return (
      <div>
        pollslist
      </div>
    );
  }
}

export default PollsList;
