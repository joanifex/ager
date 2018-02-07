import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';
import tileTypes from './constants/tileTypes';
import tileData from './data/tiles';
import { populateTile } from './actions/tiles';

export const Tile = ({ dispatch, tile }) => (
  <svg
    width="100%"
    height="100%"
    onClick={() => dispatch(populateTile(tile.id))}
  >
    <rect
      width="100%"
      height="100%"
      fill={tileData[tile.type].color}
      stroke="black"
    />
    {tile.populated && <circle cx="50%" cy="50%" r="10%" stroke="black" />}
  </svg>
);

Tile.defaultProps = {
  dispatch: () => ({}),
  tile: {
    id: uuid(),
    populated: false,
    type: tileTypes[Math.floor(Math.random() * tileTypes.length)]
  }
};

Tile.propTypes = {
  dispatch: PropTypes.func.isRequired,
  tile: PropTypes.shape({
    id: PropTypes.string.isRequired,
    populated: PropTypes.bool.isRequired,
    type: PropTypes.oneOf(tileTypes)
  }).isRequired
};

export default connect()(Tile);
