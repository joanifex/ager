export default function screenReducer(state = 'start', action) {
  switch (action.type) {
    case 'SCREEN_CHANGE':
      return action.newScreen;
    default:
      return state;
  }
}
