import { combineReducers } from 'redux';
import foodProduced from './foodProduced';
import grid from './grid';
import populations from './populations';
import screen from './screen';
import tiles from './tiles';
import turn from './turn';

export default combineReducers({
  foodProduced,
  grid,
  populations,
  screen,
  tiles,
  turn,
});
