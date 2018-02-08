import React from 'react';
import ReactDOM from 'react-dom';
import { CreatePopulation } from './CreatePopulation';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CreatePopulation />, div);
  ReactDOM.unmountComponentAtNode(div);
});
