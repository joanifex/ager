import uuid from 'uuid/v4';
import tileTypes from '../constants/tileTypes';

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
        ...state,
        food: state.food + action.foodProduction
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
        ...state,
        populations: state.populations.map(
          population =>
            population.id === action.populationId
              ? { ...population, populating: null }
              : population
        )
      };
    default:
      return state;
  }
};
