export default function foodProducted(state = 0, action) {
  switch (action.type) {
    case 'CREATE_POPULATION':
      return state - 3;
    case 'END_TURN':
      return state + action.foodProduction > 0
        ? state + action.foodProduction
        : 0;
    default:
      return state;
  }
}
