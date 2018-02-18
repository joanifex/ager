import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export const SelectedTile = ({ dispatch, selectedTile }) => (
  <div>
    {selectedTile}
    <button>Populate Tile</button>
  </div>
);

SelectedTile.defaultProps = {
  dispatch: () => {},
  selectedTile: null,
};

SelectedTile.propTypes = {
  dispatch: PropTypes.func.isRequired,
  selectedTile: PropTypes.string,
};

export default connect(state => {
  return {
    selectedTile: state.selectedTile,
  };
})(SelectedTile);
