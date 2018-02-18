import React from 'react';

import CreatePopulation from './CreatePopulation';
import EndTurn from './EndTurn';
import SelectedTile from './SelectedTile';

export const BottomBar = () => (
  <footer className="flex flex-space-around">
    <SelectedTile />
    <div className="flex flex-column">
      <CreatePopulation />
      <EndTurn />
    </div>
  </footer>
);

export default BottomBar;
