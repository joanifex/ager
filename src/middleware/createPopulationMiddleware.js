import { createNewPopulation } from '../helpers/populationHelpers';

const createPopulationMiddleware = store => next => action => {
  if (action.type === 'CREATE_POPULATION') {
    const newPopulation = createNewPopulation();
    return next({
      ...action,
      newPopulation,
    });
  }
  return next(action);
};

export default createPopulationMiddleware;
