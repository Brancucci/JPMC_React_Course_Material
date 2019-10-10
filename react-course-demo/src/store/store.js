import { createStore, applyMiddleware } from 'redux';
import { reducer } from './reducers';
import { middlewares } from './middlewares';

const initialState = {};

const enhancers = applyMiddleware(...middlewares);

export const store = createStore(reducer, initialState, enhancers);