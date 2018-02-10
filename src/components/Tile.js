import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';
import tileTypes from '../constants/tileTypes';
import tileData from '../data/tiles';
import { populationPopulatesTile, populationDepopulatesTile } from '../actions';
import { getPopulations } from '../selectors';

export const Tile = ({
  availablePopulationId,
  dispatch,
  populatingPopulationId,
  tileId,
  tileType,
}) => (
  <svg
    width="100%"
    height="100%"
    onClick={
      populatingPopulationId
        ? () =>
            dispatch(
              populationDepopulatesTile({
                populationId: populatingPopulationId,
                tileId,
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
  tileId: uuid(),
  tileType: tileTypes[Math.floor(Math.random() * tileTypes.length)],
};

Tile.propTypes = {
  availablePopulationId: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
  populatingPopulatedId: PropTypes.string,
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
  return {
    availablePopulationId: availablePopulation ? availablePopulation.id : null,
    populatingPopulationId: populatingPopulation
      ? populatingPopulation.id
      : null,
    tileType: state.tiles.byId[tileId].type,
  };
})(Tile);
