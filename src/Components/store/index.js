import { createStore, combineReducers } from 'redux';
import basketReducer from '../store/reducers/index';

const store = createStore(basketReducer)
window.store = store

export default store;