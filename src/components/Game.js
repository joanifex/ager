import React from 'react';

import CreatePopulation from './CreatePopulation';
import EndTurn from './EndTurn';
import Grid from './Grid';
import TopBar from './TopBar';

export const Game = () => (
  <div>
    <TopBar />
    <hr />
    <Grid />
    <hr />
    <CreatePopulation />
    <EndTurn />
  </div>
);

export default Game;
