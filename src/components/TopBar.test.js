import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { TopBar } from './TopBar';

it('renders without crashing', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<TopBar />);
});
