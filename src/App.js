import React, { Component } from 'react';
import './App.css';

import Map from './Map';
import Stats from './Stats';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div id="container">
          <Stats />
          <Map />
        </div>
      </div>
    );
  }
}

export default App;
