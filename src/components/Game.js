import React from 'react';

import BottomBar from './BottomBar';
import Grid from './Grid';
import TopBar from './TopBar';

export const Game = () => (
  <div>
    <TopBar />
    <hr />
    <Grid />
    <hr />
    <BottomBar />
  </div>
);

export default Game;
