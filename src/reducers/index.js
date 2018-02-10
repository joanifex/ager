import uuid from 'uuid/v4';
import tileTypes from '../constants/tileTypes';

const randomTile = () => ({
  type: tileTypes[Math.floor(Math.random() * tileTypes.length)],
  id: uuid(),
});

const initialTiles = Array.from(new Array(25)).reduce(
  (tiles, tile) => {
    const newTile = randomTile();
    return {
      byId: {
        ...tiles.byId,
        [newTile.id]: newTile,
      },
      allIds: [...tiles.allIds, newTile.id],
    };
  },
  { byId: {}, allIds: [] },
);

const initialPopulations = [{ id: uuid(), populating: null }];

const initialGrid = [];

const initialState = {
  food: 0,
  grid: initialGrid,
  populations: initialPopulations,
  tiles: initialTiles,
  turn: 1,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'END_TURN':
      return {
        ...state,
        food:
          state.food + action.foodProduction > 0
            ? state.food + action.foodProduction
            : 0,
        populations: action.populationLoss
          ? state.populations.slice(0, state.populations.length - 1)
          : state.populations,
        turn: state.turn + 1,
      };
    case 'CREATE_POPULATION':
      return {
        ...state,
        populations: [...state.populations, { id: uuid(), populating: null }],
        food: state.food - 3,
      };
    case 'POPULATION_POPULATES_TILE':
      return {
        ...state,
        populations: state.populations.map(
          population =>
            population.id === action.populationId
              ? { ...population, populating: action.tileId }
              : population,
        ),
      };
    case 'POPULATION_DEPOPULATES_TILE':
      return {
        ...state,
        populations: state.populations.map(
          population =>
            population.id === action.populationId
              ? { ...population, populating: null }
              : population,
        ),
      };
    default:
      return state;
  }
};
