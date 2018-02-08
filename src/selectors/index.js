import { createSelector } from 'reselect';
import tileData from '../data/tiles';

const getFood = state => state.food;
const getPopulations = state => state.populations;
const getTiles = state => state.tiles;

export const getFoodProduction = createSelector(
  [getPopulations, getTiles],
  (populations, tiles) =>
    populations.reduce(
      (sum, population) =>
        population.populating
          ? sum +
            tileData[tiles.find(tile => tile.id === population.populating).type]
              .food
          : sum,
      0
    ) - populations.length
);

export const getEndTurnData = createSelector(
  [getPopulations, getFood, getFoodProduction],
  (populations, food, foodProduction) => ({
    foodProduction,
    populationLoss: food + foodProduction < 0
  })
);
