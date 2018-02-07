import uuid from 'uuid/v4';
import tileTypes from '../constants/tileTypes';
import tileData from '../data/tiles';

const initialTiles = Array.from(new Array(9)).map(tile => ({
  type: tileTypes[Math.floor(Math.random() * tileTypes.length)],
  id: uuid()
}));

const initialPopulations = [{ id: uuid(), populating: null }];

const initialState = {
  food: 0,
  populations: initialPopulations,
  tiles: initialTiles
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'END_TURN':
      return {
        ...state
      };
    case 'POPULATION_POPULATES_TILE':
      return {
        ...state,
        populations: state.populations.map(
          population =>
            population.id === action.populationId
              ? { ...population, populating: action.tileId }
              : population
        )
      };
    case 'POPULATION_DEPOPULATES_TILE':
      return {
        ...state
      };
    default:
      return state;
  }
};
