import React from 'react';

import Stats from './Stats';
import TurnCounter from './TurnCounter';

export const TopBar = () => (
  <header className="flex flex-space-around">
    <TurnCounter />
    <Stats />
  </header>
);

export default TopBar;
