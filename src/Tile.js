import React from 'react';
import PropTypes from 'prop-types';
import TILES from './constants/tiles';

const Tile = ({tile}) => (
  <svg width="100%" height="100%">
    <rect
      width="100%"
      height="100%"
      fill={TILES[tile] ? TILES[tile].color : 'black'}
      stroke="black"
    />
  </svg>
);

Tile.propTypes = {
  tile: PropTypes.oneOf(['grass', 'forest', 'lake', 'mountain'])
};

export default Tile;
