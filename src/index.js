import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configuredStore from './RootStore';
import RootComponent from './RootComponent';

ReactDOM.render(
  <Provider store={configuredStore()}>
    <RootComponent />
  </Provider>, document.getElementById('root'));
