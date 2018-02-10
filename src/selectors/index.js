import { createSelector } from 'reselect';
import tileData from '../data/tiles';

const getFoodState = state => state.food;
const getPopulationsState = state => state.populations;
const getTilesState = state => state.tiles;

export const getPopulations = createSelector([getPopulationsState], state =>
  Object.values(state.byId),
);

export const getTiles = createSelector([getTilesState], state =>
  Object.values(state.byId),
);

export const getFoodProduction = createSelector(
  [getPopulations, getTiles, getTilesState],
  (populations, tiles, tilesState) =>
    populations.reduce(
      (sum, population) =>
        population.populating
          ? sum + tileData[tilesState.byId[population.populating].type].food
          : sum,
      0,
    ) - populations.length,
);

export const getEndTurnData = createSelector(
  [getPopulations, getFoodState, getFoodProduction],
  (populations, food, foodProduction) => ({
    foodProduction,
    populationLoss: food + foodProduction < 0,
  }),
);
