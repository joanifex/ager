import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import App from './components/App';
import createPopulationMiddleware from './middleware/createPopulationMiddleware';
import startNewGameMiddleware from './middleware/startNewGameMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

ReactDOM.render(
  <Provider
    store={createStore(
      reducers,
      composeEnhancers(
        applyMiddleware(createPopulationMiddleware, startNewGameMiddleware),
      ),
    )}
  >
    <App />
  </Provider>,
  document.getElementById('root'),
);
