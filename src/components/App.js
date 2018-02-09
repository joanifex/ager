import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './App.css';
import CreatePopulation from './CreatePopulation';
import EndTurn from './EndTurn';
import Grid from './Grid';
import Reboot from 'material-ui/Reboot';
import TopBar from './TopBar';

const App = ({ populationTotal, turn }) => {
  if (populationTotal < 1) {
    return 'You Lose';
  } else if (turn > 10) {
    return 'You Win';
  } else {
    return (
      <div className="app">
        <Reboot />
        <TopBar />
        <Grid />
        <CreatePopulation />
        <EndTurn />
      </div>
    );
  }
};

App.propTypes = {
  populationTotal: PropTypes.number.isRequired,
  turn: PropTypes.number.isRequired,
};

export default connect(({ populations, turn }) => ({
  populationTotal: populations.length,
  turn,
}))(App);
