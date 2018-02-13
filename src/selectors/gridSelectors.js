import { createSelector } from 'reselect';
import {
  getVerticesForCoordinates,
  areVerticesBorderingRiver,
} from '../helpers/gridHelpers';

const getGridState = state => state.grid;

export const getGridRivers = createSelector(
  [getGridState],
  grid => grid.rivers,
);
export const getGridTiles = createSelector([getGridState], grid => grid.tiles);

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
