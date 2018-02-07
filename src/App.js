import React, { Component } from 'react';
import './App.css';

import Grid from './Grid';
import Stats from './Stats';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div id="container">
          <Stats />
          <Grid />
        </div>
      </div>
    );
  }
}

export default App;
