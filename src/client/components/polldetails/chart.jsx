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

    const valuesLabels = choices.map(c => Object.assign({}, {
      value: c.votes,
      label: c.description,
      color: getRandomColor()
    }));

    // TODO refactor this because its awful
    const uniqueColors = valuesLabels.map((d, i, a) => {
      const temp = getRandomColor();

      if (a.indexOf(temp) === -1) return temp;
    });

    const chartData = valuesLabels.map((d, i) => {
      return Object.assign({}, d, { color: uniqueColors[i] });
    });

    return (
      <div className="pollchart">
        {totalVotes > 0 ? <PieChart data={chartData} /> : this._renderNoVotes()}
      </div>
    );
  }
}

export default Chart;
