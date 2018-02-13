import React from 'react';

import CreatePopulation from './CreatePopulation';
import EndTurn from './EndTurn';
import Stats from './Stats';
import TurnCounter from './TurnCounter';
import './TopBar.css';

export const TopBar = () => (
  <header id="topBar">
    <TurnCounter />
    <div>
      <CreatePopulation />
      <EndTurn />
    </div>
    <Stats />
  </header>
);

export default TopBar;
