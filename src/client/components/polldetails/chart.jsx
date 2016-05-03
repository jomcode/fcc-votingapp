import React, { Component } from 'react';

class Chart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { choices } = this.props;

    return (
      <div className="pollchart">
        <h3>Chart</h3>
      </div>
    );
  }
}

export default Chart;
