import { createStore, combineReducers } from 'redux';
import basketReducer from './reducers/index';

const persistedState = localStorage.getItem('reduxState') 
                       ? JSON.parse(localStorage.getItem('reduxState'))
                       : {"items":{},"totalCount":0,"totalPrice":0}
const store = createStore(basketReducer, persistedState)
window.store = store

store.subscribe(()=>{
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
  })

export default store;