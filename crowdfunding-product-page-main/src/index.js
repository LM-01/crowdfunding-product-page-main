import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app';
import './css/style.css';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import combineReducers from './reducers'

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(combineReducers)

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
  );