import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';
import tileTypes from '../constants/tileTypes';
import tileData from '../data/tiles';
import { populationPopulatesTile, populationDepopulates } from '../actions';
import { getPopulations, getRiverBordersByTileId } from '../selectors';

const styles = {
  riverBorder: { border: '1px blue solid' },
};

export const Tile = ({
  availablePopulationId,
  dispatch,
  populatingPopulationId,
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
    onClick={
      populatingPopulationId
        ? () =>
            dispatch(
              populationDepopulates({
                populationId: populatingPopulationId,
              }),
            )
        : availablePopulationId
          ? () =>
              dispatch(
                populationPopulatesTile({
                  populationId: availablePopulationId,
                  tileId,
                }),
              )
          : null
    }
  >
    <rect
      width="100%"
      height="100%"
      fill={tileData[tileType].color}
      stroke="black"
    />
    {populatingPopulationId && (
      <circle cx="50%" cy="50%" r="10%" stroke="black" />
    )}
  </svg>
);

Tile.defaultProps = {
  availablePopulationId: null,
  dispatch: () => ({}),
  populatingPopulationId: null,
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
  availablePopulationId: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
  populatingPopulatedId: PropTypes.string,
  riverBorders: PropTypes.shape({
    top: PropTypes.bool,
    bottom: PropTypes.bool,
    right: PropTypes.bool,
    left: PropTypes.bool,
  }),
  tileId: PropTypes.string.isRequired,
  tileType: PropTypes.string.isRequired,
};

export default connect((state, { tileId }) => {
  const availablePopulation = getPopulations(state).find(
    population => population.populating === null,
  );
  const populatingPopulation = getPopulations(state).find(
    population => population.populating === tileId,
  );
  const borders = getRiverBordersByTileId(state);
  return {
    availablePopulationId: availablePopulation ? availablePopulation.id : null,
    populatingPopulationId: populatingPopulation
      ? populatingPopulation.id
      : null,
    riverBorders: getRiverBordersByTileId(state)[tileId],
    tileType: state.tiles.byId[tileId].type,
  };
})(Tile);
