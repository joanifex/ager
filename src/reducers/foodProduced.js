const initialState = 0;

export default function foodProducted(state = initialState, action) {
  switch (action.type) {
    case 'CREATE_POPULATION':
      return state - 3;
    case 'END_TURN':
      return state + action.foodProduction > 0
        ? state + action.foodProduction
        : 0;
    case 'START_NEW_GAME':
      return initialState;
    default:
      return state;
  }
}
