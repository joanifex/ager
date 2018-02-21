import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';
import tileTypes from '../constants/tileTypes';
import tileData from '../data/tiles';
import { selectTile } from '../actions';
import { getPopulations } from '../selectors/populationSelectors';
import { getRiverBordersByTileId } from '../selectors/gridSelectors';

export const Tile = ({
  dispatch,
  isPopulated,
  isSelected,
  riverBorders,
  tileId,
  tileType,
}) => (
  <svg
    width="100%"
    height="100%"
    style={{
      borderTop: riverBorders.top ? '5px blue solid' : null,
      borderBottom: riverBorders.bottom ? '5px blue solid' : null,
      borderRight: riverBorders.right ? '5px blue solid' : null,
      borderLeft: riverBorders.left ? '5px blue solid' : null,
    }}
    onClick={() => dispatch(selectTile({ tileId: isSelected ? null : tileId }))}
  >
    <rect
      width="100%"
      height="100%"
      fill={tileData[tileType].color}
      stroke={isSelected ? 'gold' : 'black'}
      strokeWidth={isSelected ? '5' : '1'}
    />
    {isPopulated && <circle cx="50%" cy="50%" r="10%" stroke="black" />}
  </svg>
);

Tile.defaultProps = {
  dispatch: () => ({}),
  isPopulated: false,
  isSelected: false,
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
  isSelected: PropTypes.bool.isRequired,
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
  isSelected: state.selectedTile === tileId,
  riverBorders: getRiverBordersByTileId(state)[tileId],
  tileType: state.tiles.byId[tileId].type,
}))(Tile);
