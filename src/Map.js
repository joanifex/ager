import React, { Component } from 'react';
import './Map.css'
import Tile from './Tile';

class Map extends Component {
  state = {
    tiles: [
      'grass', 'grass', 'grass',
      'mountain', 'lake', 'grass',
      'forest', 'forest', 'forest',
    ],
  }

  render() {
    return (
      <div id="map">
        {this.state.tiles.map((tile, index) => (
          <Tile key={index} tile={tile} />
        ))}
      </div>
    );
  }
}

export default Map;
