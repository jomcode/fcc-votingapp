import React, { Component } from 'react';
import { Pie as PieChart } from 'react-chartjs';

import { getRandomColor } from '../../utilities/getrandomcolor';

class Chart extends Component {
  constructor(props) {
    super(props);
  }

  _renderNoVotes = () => {
    return (<p>No votes cast yet!</p>);
  };

  render() {
    const { choices } = this.props;

    const totalVotes = choices.reduce((total, c) => {
      return total + c.votes;
    }, 0);

    const chartData = choices.map(c => Object.assign({}, {
      value: c.votes,
      label: c.description,
      color: `#${getRandomColor()}`
    }));

    return (
      <div className="pollchart">
        {totalVotes > 0 ? <PieChart data={chartData} /> : this._renderNoVotes()}
      </div>
    );
  }
}

export default Chart;
