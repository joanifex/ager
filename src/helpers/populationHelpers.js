import uuid from 'uuid/v4';

export function createNewPopulation() {
  return {
    id: uuid(),
    populating: null,
  };
}

export function createInitialPopulations() {
  const population = createNewPopulation();
  return {
    byId: {
      [population.id]: population,
    },
    allIds: [population.id],
  };
}
