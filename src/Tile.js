import React from 'react';

const tiles = {
  grass: {
    color: '#5A783A',
  },
  forest: {
    color: '#2A381B', 
  },
  mountain: {
    color: '#B2782F',
  },
  lake: {
    color: '#5399FF',
  },
};

const Tile = ({tile}) => (
  <span style={{color: tiles[tile] ? tiles[tile].color : 'black'}}>
    {tile}
  </span>
);

export default Tile;
