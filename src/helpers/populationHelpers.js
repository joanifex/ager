import uuid from 'uuid/v4';

function createNewPopulation() {
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
