import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ConfiguredStore from './RootStorage';
import RootComponent from './RootComponent';

ReactDOM.render(
  <Provider store={ConfiguredStore}>
    <RootComponent />
  </Provider>, document.getElementById('root'));
