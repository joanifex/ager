import { createSelector } from 'reselect';

const getPopulationsState = state => state.populations;

export const getPopulations = createSelector(
  [getPopulationsState],
  populations => Object.values(populations.byId),
);

export const getAvailablePopulationId = createSelector(
  [getPopulations],
  populations => {
    const availablePopulation = populations.find(
      population => population.populating === null,
    );
    return availablePopulation ? availablePopulation.id : null;
  },
);
