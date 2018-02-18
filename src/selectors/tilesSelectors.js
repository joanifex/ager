import { createSelector } from 'reselect';

export const getTilesState = state => state.tiles;

export const getTiles = createSelector([getTilesState], tiles =>
  Object.values(tiles.byId),
);
