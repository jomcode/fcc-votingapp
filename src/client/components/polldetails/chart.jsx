import React, { Component } from 'react';
import { Pie as PieChart } from 'react-chartjs';

import { getRandomColor } from '../../utilities/getrandomcolor';

class Chart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { choices } = this.props;

    const chartData = choices.map(c => Object.assign({}, {
      value: c.votes,
      label: c.description,
      color: `#${getRandomColor()}`
    }));

    console.log('chartData', chartData);

    return (
      <div className="pollchart">
        <PieChart data={chartData} />
      </div>
    );
  }
}

export default Chart;
