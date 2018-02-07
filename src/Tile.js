import React from 'react';
import PropTypes from 'prop-types';
import TILES from './constants/tiles';

const Tile = ({tile}) => (
  <svg width="100%" height="100%" onClick={() => console.log(tile.id)}>
    <rect
      width="100%"
      height="100%"
      fill={TILES[tile.type] ? TILES[tile.type].color : 'black'}
      stroke="black"
    />
  </svg>
);

Tile.defaultProps = {
  tile: {
    type: 'grass',
    id: '0',
  },
};

Tile.propTypes = {
  tile: PropTypes.shape({
    type: PropTypes.oneOf(['grass', 'forest', 'lake', 'mountain']),
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default Tile;
