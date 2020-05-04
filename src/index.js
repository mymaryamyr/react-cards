import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';


const initialState = {
  count: 0,
  items: []
};


const increment = (state = initialState, action)  => {
  switch (action.type) {
    case  "INCREMENT":
      return {
        count: state.count + 1
      }
    default:
      return state
  }
}
const addId = (state = initialState, action)  => {
  switch (action.type) {
    case "ADDID":
      return Object.assign({} , state, {
        items : [...state.items,action.id]
      })
    default:
      return state
  }
}

combineReducers({ increment, addId})

const store = createStore(addId);

console.log(store.getState())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
