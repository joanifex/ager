import React, { Component } from 'react';

import Tile from './Tile';

class Map extends Component {
  state = {
    grid: [
      ['grass', 'grass', 'grass'],
      ['mountain', 'lake', 'grass'],
      ['forest', 'forest', 'forest'],
    ],
  }

  render() {
    return (
      <div>
        {this.state.grid.map((row, index) => (
          <p key={index}>
            {row.map((tile, index) => (
              <Tile key={index} tile={tile} />
            ))}
          </p>
        ))}
      </div>
    );
  }
}

export default Map;
