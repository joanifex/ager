import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import App from './components/App';
import createPopulationMiddleware from './middleware/createPopulationMiddleware';
import 'typeface-roboto';

import { createInitialPopulations } from './helpers/populationHelpers';
import { createInitialTiles } from './helpers/tileHelpers';

const initialState = {
  populations: createInitialPopulations(),
  tiles: createInitialTiles(),
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

ReactDOM.render(
  <Provider
    store={createStore(
      reducers,
      initialState,
      composeEnhancers(applyMiddleware(createPopulationMiddleware)),
    )}
  >
    <App />
  </Provider>,
  document.getElementById('root'),
);
