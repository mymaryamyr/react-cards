import { createStore } from 'redux';
import reducer from '../reducers/index'
import { addItem } from '../actions';
import rootReducer from '../reducers/rootReducer';



export const store = createStore(rootReducer)


export default store;