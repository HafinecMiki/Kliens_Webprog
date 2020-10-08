import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import { Provider } from 'react-redux';
import { AdatProvider } from './domain/AdatProvider'
import { configureStore } from './state/store';
import { receiveMessages } from './api/socketActions';

const store = configureStore();
//store.dispatch(receiveMessages());

ReactDOM.render(
  <Provider store={store}>
    <AdatProvider>
      <App />
    </AdatProvider>
    
  </Provider>,
  document.getElementById('root')
);
