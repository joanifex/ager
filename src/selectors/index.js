import { createSelector } from 'reselect';
import { getPopulations } from './populationSelectors';
import { getTiles, getTilesState } from './tilesSelectors';
import tileData from '../data/tiles';

const getFoodProducedState = state => state.foodProduced;
const getTurn = state => state.turn;

export const getFoodProduction = createSelector(
  [getPopulations, getTilesState],
  (populations, tilesState) =>
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

export const getTilesByIdWithPopulators = createSelector(
  [getPopulations, getTiles],
  (populations, tiles) => {
    const populatorsByTileId = populations.reduce(
      (populatorsById, population) =>
        Object.assign(
          {},
          populatorsById,
          population.populating
            ? { [population.populating]: population.id }
            : null,
        ),
      {},
    );
    return tiles.reduce(
      (tilesByIdWithPopulators, tile) => ({
        ...tilesByIdWithPopulators,
        [tile.id]: {
          ...tile,
          populator: populatorsByTileId[tile.id]
            ? populatorsByTileId[tile.id]
            : null,
        },
      }),
      {},
    );
  },
);
