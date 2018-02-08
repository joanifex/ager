import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './App.css';
import CreatePopulation from './CreatePopulation';
import EndTurn from './EndTurn';
import Grid from './Grid';
import Stats from './Stats';

const App = ({ populationTotal, turn }) => {
  if (populationTotal < 1) {
    return 'You Lose';
  } else if (turn > 10) {
    return 'You Win';
  } else {
    return (
      <div className="app">
        <div id="container">
          <Stats />
          <Grid />
          <CreatePopulation />
          <EndTurn />
        </div>
      </div>
    );
  }
};

App.propTypes = {
  populationTotal: PropTypes.number.isRequired,
  turn: PropTypes.number.isRequired
};

export default connect(({ populations, turn }) => ({
  populationTotal: populations.length,
  turn
}))(App);
