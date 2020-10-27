import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger'
import promise from 'redux-promise-middleware';
import rootReducer from './reducers';
import { App } from './App';
import './styles/index.scss';

const store = createStore(rootReducer, applyMiddleware(promise, logger));

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
);
