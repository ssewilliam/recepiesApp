import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from './RootReducer';

const configureStore = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const configuredStore = createStore(RootReducer, configureStore(applyMiddleware(thunk)));
export default configuredStore;
