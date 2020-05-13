import { createStore, combineReducers } from 'redux';
import basketReducer from './reducers/index';

const store = createStore(basketReducer)
window.store = store

export default store;