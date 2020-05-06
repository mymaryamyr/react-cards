import { combineReducers } from 'redux';
import rootReducer from './rootReducer'
import increment from './increment'


export default combineReducers({
    rootReducer, increment
})
