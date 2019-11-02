import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import allReducer from './store/reducers';

const intialState ={};

const middleware = [thunk];

const store = createStore(
    allReducer, 
    intialState, 
    applyMiddleware(...middleware)
    );

export default store;