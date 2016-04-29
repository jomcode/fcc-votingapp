import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <p>components/app.jsx</p>
        {this.props.children}
      </div>
    );
  }
}

export default App;
