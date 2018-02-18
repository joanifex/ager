import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { BottomBar } from './BottomBar';

it('renders without crashing', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<BottomBar />);
});
