export default function screenReducer(state = 'start', action) {
  switch (action.type) {
    case 'END_TURN':
      if (action.isGameLoss) {
        return 'loss';
      } else {
        return state;
      }
    case 'SCREEN_CHANGE':
      return action.newScreen;
    default:
      return state;
  }
}
