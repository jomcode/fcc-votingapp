import React, { Component } from 'react';
const PieChart = require('react-chartjs').Pie;

class Chart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { choices } = this.props;

    return (
      <div className="pollchart">
        <h3>Current Results</h3>
      </div>
    );
  }
}

export default Chart;
