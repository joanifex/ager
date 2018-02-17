import { createSelector } from 'reselect';
import tileData from '../data/tiles';

const getFoodProducedState = state => state.foodProduced;
const getPopulationsState = state => state.populations;
const getTilesState = state => state.tiles;
const getTurn = state => state.turn;

export const getPopulations = createSelector(
  [getPopulationsState],
  populations => Object.values(populations.byId),
);

export const getTiles = createSelector([getTilesState], tiles =>
  Object.values(tiles.byId),
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
  [getPopulations, getFoodProducedState, getFoodProduction, getTurn],
  (populations, foodProduced, foodProduction, turn) => {
    const populationLoss = foodProduced + foodProduction < 0;
    return {
      foodProduction,
      populationLoss,
      isGameLoss: populationLoss ? populations.length - 1 < 1 : false,
      isGameWin: turn > 14,
    };
  },
);

export const getScore = createSelector(
  [getPopulations],
  populations => populations.length * 25,
);
