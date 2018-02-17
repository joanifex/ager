const initialState = {
  byId: {},
  allIds: [],
};

export default function populationsReducer(state = initialState, action) {
  switch (action.type) {
    case 'CREATE_POPULATION':
      const { newPopulation } = action;
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
    case 'START_NEW_GAME':
      return action.populations;
    default:
      return state;
  }
}
