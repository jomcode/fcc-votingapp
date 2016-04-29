import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>app</h1>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({ state });

export default connect(mapStateToProps)(App);
