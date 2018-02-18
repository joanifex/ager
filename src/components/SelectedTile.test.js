import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { SelectedTile } from './SelectedTile';

it('renders without crashing', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<SelectedTile />);
});
