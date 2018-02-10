import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Grid.css';
import Tile from './Tile';

export const Grid = ({ tiles }) => (
  <div id="map">{tiles.map(tile => <Tile key={tile} tileId={tile} />)}</div>
);

Grid.defaultProps = {
  tiles: { byId: {}, allIds: [] },
};

Grid.propTypes = {
  tiles: PropTypes.shape({ byId: {}, allIds: [] }).isRequired,
};

export default connect(({ tiles: { allIds } }) => ({ tiles: allIds }))(Grid);
