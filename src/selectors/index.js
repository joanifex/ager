import { createSelector } from 'reselect';
import tileData from '../data/tiles';
import {
  getVerticesForCoordinates,
  areVerticesBorderingRiver,
} from '../helpers/gridHelpers';

const getFoodProducedState = state => state.foodProduced;
const getPopulationsState = state => state.populations;
const getGridState = state => state.grid;
const getTilesState = state => state.tiles;

export const getGridTiles = createSelector([getGridState], grid => grid.tiles);
export const getGridRivers = createSelector(
  [getGridState],
  grid => grid.rivers,
);

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
  [getPopulations, getFoodProducedState, getFoodProduction],
  (populations, foodProduced, foodProduction) => ({
    foodProduction,
    populationLoss: foodProduced + foodProduction < 0,
  }),
);

export const getGridCoordinatesByTileId = createSelector(
  [getGridTiles],
  tiles =>
    tiles.reduce(
      (coordinates, row, y) => ({
        ...coordinates,
        ...row.reduce(
          (rowCoordinates, tile, x) => ({
            ...rowCoordinates,
            [tile]: [x, y],
          }),
          {},
        ),
      }),
      {},
    ),
);

export const getGridVerticesByTileId = createSelector(
  [getGridCoordinatesByTileId],
  coordinates =>
    Object.keys(coordinates).reduce(
      (vertices, tileId) => ({
        ...vertices,
        [tileId]: getVerticesForCoordinates(coordinates[tileId]),
      }),
      {},
    ),
);

export const getRiverBordersByTileId = createSelector(
  [getGridVerticesByTileId, getGridRivers],
  (vertices, rivers) =>
    Object.keys(vertices).reduce((borders, tileId) => {
      const { topRight, topLeft, bottomRight, bottomLeft } = vertices[tileId];
      const topVertices = [topLeft, topRight];
      const bottomVertices = [bottomLeft, bottomRight];
      const rightVertices = [topRight, bottomRight];
      const leftVertices = [topLeft, bottomLeft];
      return {
        ...borders,
        [tileId]: {
          top: areVerticesBorderingRiver({ rivers, vertices: topVertices }),
          bottom: areVerticesBorderingRiver({
            rivers,
            vertices: bottomVertices,
          }),
          right: areVerticesBorderingRiver({ rivers, vertices: rightVertices }),
          left: areVerticesBorderingRiver({ rivers, vertices: leftVertices }),
        },
      };
    }, {}),
);
