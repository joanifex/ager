import uuid from 'uuid/v4';

function createNewPopulation() {
  return {
    id: uuid(),
    populating: null,
  };
}

function createInitialPopulations() {
  const population = createNewPopulation();
  return {
    byId: {
      [population.id]: population,
    },
    allIds: [population.id],
  };
}

export default function populationsReducer(
  state = createInitialPopulations(),
  action,
) {
  switch (action.type) {
    case 'CREATE_POPULATION':
      const newPopulation = createNewPopulation();
      return {
        byId: {
          ...state.byId,
          [newPopulation.id]: newPopulation,
        },
        allIds: [...state.allIds, newPopulation.id],
      };
    case 'END_TURN':
      if (action.populationLoss) {
        const [populationLostId, ...remainingPopulationIds] = state.allIds;
        const {
          [populationLostId]: populationLost,
          ...remainingPopulations
        } = state.byId;
        return {
          byId: remainingPopulations,
          allIds: remainingPopulationIds,
        };
      } else {
        return state;
      }
    case 'POPULATION_POPULATES_TILE':
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.populationId]: {
            ...state.byId[action.populationId],
            populating: action.tileId,
          },
        },
      };
    case 'POPULATION_DEPOPULATES':
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.populationId]: {
            ...state.byId[action.populationId],
            populating: null,
          },
        },
      };
    default:
      return state;
  }
}
