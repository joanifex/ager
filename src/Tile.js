import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';
import tileTypes from './constants/tileTypes';
import tileData from './data/tiles';

const Tile = ({tile}) => (
  <svg width="100%" height="100%" onClick={() => console.log(tile.id)}>
    <rect
      width="100%"
      height="100%"
      fill={tileData[tile.type].color}
      stroke="black"
    />
  </svg>
);

Tile.defaultProps = {
  tile: {
    id: uuid(),
    type: tileTypes[Math.floor(Math.random()*tileTypes.length)],
  },
};

Tile.propTypes = {
  tile: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.oneOf(tileTypes),
  }).isRequired,
};

export default Tile;
