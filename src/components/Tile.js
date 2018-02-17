import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';
import tileTypes from '../constants/tileTypes';
import tileData from '../data/tiles';
import { selectTile } from '../actions';
import { getPopulations } from '../selectors';
import { getRiverBordersByTileId } from '../selectors/gridSelectors';

export const Tile = ({
  dispatch,
  isPopulated,
  riverBorders,
  tileId,
  tileType,
}) => (
  <svg
    width="100%"
    height="100%"
    style={{
      borderTop: riverBorders.top ? '1px blue solid' : null,
      borderBottom: riverBorders.bottom ? '1px blue solid' : null,
      borderRight: riverBorders.right ? '1px blue solid' : null,
      borderLeft: riverBorders.left ? '1px blue solid' : null,
    }}
    onClick={() => dispatch(selectTile({ tileId }))}
  >
    <rect
      width="100%"
      height="100%"
      fill={tileData[tileType].color}
      stroke="black"
    />
    {isPopulated && <circle cx="50%" cy="50%" r="10%" stroke="black" />}
  </svg>
);

Tile.defaultProps = {
  dispatch: () => ({}),
  isPopulated: false,
  riverBorders: {
    top: false,
    bottom: false,
    right: false,
    left: false,
  },
  tileId: uuid(),
  tileType: tileTypes[Math.floor(Math.random() * tileTypes.length)],
};

Tile.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isPopulated: PropTypes.bool.isRequired,
  riverBorders: PropTypes.shape({
    top: PropTypes.bool,
    bottom: PropTypes.bool,
    right: PropTypes.bool,
    left: PropTypes.bool,
  }),
  tileId: PropTypes.string.isRequired,
  tileType: PropTypes.string.isRequired,
};

export default connect((state, { tileId }) => ({
  isPopulated: getPopulations(state).some(
    population => population.populating === tileId,
  ),
  riverBorders: getRiverBordersByTileId(state)[tileId],
  tileType: state.tiles.byId[tileId].type,
}))(Tile);
