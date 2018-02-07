import React, { Component } from 'react';
import './App.css';

import EndTurn from './EndTurn';
import Grid from './Grid';
import Stats from './Stats';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div id="container">
          <Stats />
          <Grid />
          <EndTurn />
        </div>
      </div>
    );
  }
}

export default App;
