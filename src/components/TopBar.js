import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Stats from './Stats';
import Toolbar from 'material-ui/Toolbar';
import TurnCounter from './TurnCounter';

const styles = {
  root: {
    width: '100%',
  },
  grid: {
    display: 'grid',
    gridTemplateColums: '10% 90%',
    gridAutoFlow: 'column',
  },
};

export const TopBar = ({ classes: { grid, root } }) => (
  <div className={root}>
    <AppBar position="static" color="default">
      <Toolbar className={grid}>
        <TurnCounter />
        <Stats />
      </Toolbar>
    </AppBar>
  </div>
);

TopBar.defaultProps = {
  classes: {},
};

TopBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopBar);
