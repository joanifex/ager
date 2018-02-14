import React from 'react';

import Stats from './Stats';
import TurnCounter from './TurnCounter';
import './TopBar.css';

export const TopBar = () => (
  <header id="topBar">
    <TurnCounter />
    <Stats />
  </header>
);

export default TopBar;
