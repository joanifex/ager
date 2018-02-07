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
  <svg width="100%" height="100%">
    <rect
      width="100%"
      height="100%"
      fill={tiles[tile] ? tiles[tile].color : 'black'}
      stroke="black"
    />
  </svg>
);


export default Tile;
