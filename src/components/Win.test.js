import React from 'react';
import ReactDOM from 'react-dom';
import { Win } from './Win';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Win />, div);
  ReactDOM.unmountComponentAtNode(div);
});
