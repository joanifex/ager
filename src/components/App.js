import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './App.css';
import Game from './Game';
import Loss from './Loss';
import Start from './Start';

export const App = ({ screen }) => (
  <div className="app">
    {(() => {
      switch (screen) {
        case 'game':
          return <Game />;
        case 'loss':
          return <Loss />;
        case 'start':
          return <Start />;
        default:
          return;
      }
    })()}
  </div>
);

App.defaultProps = {
  screen: 'start',
};

App.propTypes = {
  screen: PropTypes.string.isRequired,
};

export default connect(({ screen }) => ({ screen }))(App);
