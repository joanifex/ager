import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './Start.css';
import { screenChange } from '../actions';

export const Start = ({ dispatch }) => (
  <div className="start">
    <header>Athena</header>
    <button onClick={() => dispatch(screenChange({ newScreen: 'game' }))}>
      Start
    </button>
  </div>
);

Start.defaultProps = { dispatch: () => {} };
Start.propTypes = { dispatch: PropTypes.func.isRequired };

export default connect()(Start);
