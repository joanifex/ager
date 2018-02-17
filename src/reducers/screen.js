export default function screenReducer(state = 'start', action) {
  switch (action.type) {
    case 'END_TURN':
      if (action.isGameLoss) {
        return 'loss';
      } else if (action.isGameWin) {
        return 'win';
      } else {
        return state;
      }
    case 'SCREEN_CHANGE':
      return action.newScreen;
    case 'START_NEW_GAME':
      return action.newScreen;
    default:
      return state;
  }
}
