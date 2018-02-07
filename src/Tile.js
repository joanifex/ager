import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';
import tileTypes from './constants/tileTypes';
import tileData from './data/tiles';
import { populationPopulatesTile } from './actions';

export const Tile = ({
  availablePopulationId,
  dispatch,
  populated,
  tileId,
  tileType
}) => (
  <svg
    width="100%"
    height="100%"
    onClick={
      availablePopulationId
        ? () =>
            dispatch(
              populationPopulatesTile({
                populationId: availablePopulationId,
                tileId
              })
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
    {populated && <circle cx="50%" cy="50%" r="10%" stroke="black" />}
  </svg>
);

Tile.defaultProps = {
  availablePopulationId: null,
  dispatch: () => ({}),
  populated: false,
  tileId: uuid(),
  tileType: tileTypes[Math.floor(Math.random() * tileTypes.length)]
};

Tile.propTypes = {
  availablePopulationId: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
  populated: PropTypes.bool.isRequired,
  tileId: PropTypes.string.isRequired,
  tileType: PropTypes.string.isRequired
};

export default connect(({ populations, tiles }, { tileId }) => {
  const availablePopulation = populations.find(
    population => population.populating === null
  );
  return {
    availablePopulationId: availablePopulation ? availablePopulation.id : null,
    populated: populations.some(population => population.populating === tileId),
    tileType: tiles.find(tile => tile.id === tileId).type
  };
})(Tile);
