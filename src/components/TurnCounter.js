import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Typography from 'material-ui/Typography';

export const TurnCounter = ({ turn }) => (
  <Typography variant="title" color="inherit">
    Turn {turn}
  </Typography>
);

TurnCounter.defaultProps = { turn: 0 };

TurnCounter.propTypes = {
  turn: PropTypes.number.isRequired,
};

export default connect(({ turn }) => ({ turn }))(TurnCounter);
