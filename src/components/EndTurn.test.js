import React from 'react';
import ReactDOM from 'react-dom';
import { EndTurn } from './EndTurn';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EndTurn />, div);
  ReactDOM.unmountComponentAtNode(div);
});
