import { createInitialGrid } from '../helpers/gridHelpers';
import { createInitialPopulations } from '../helpers/populationHelpers';
import { createInitialTiles } from '../helpers/tileHelpers';
import { getTiles } from '../selectors';

const createPopulationMiddleware = store => next => action => {
  if (action.type === 'START_NEW_GAME') {
    const populations = createInitialPopulations();
    const tiles = createInitialTiles();
    const grid = createInitialGrid(getTiles({ tiles }));
    return next({
      ...action,
      grid,
      populations,
      tiles,
    });
  }
  return next(action);
};

export default createPopulationMiddleware;
