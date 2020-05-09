import { combineReducers } from 'redux';
import {ADD_ITEM, INCREMENT, REMOVE_ITEM, EMPTY_BASKET} from '../constants/action-types'


const initialState = {
    count: 0,
    items: []
};

function basketReducer(state= initialState, action) {
    switch ( action.type) {
        case ADD_ITEM:
            return Object.assign({} , state, {
            items: state.items.concat(action.payload)
        })
        case INCREMENT:
            return {
                ...state,
                count: action.count + 1
            }
        case REMOVE_ITEM:
            return {
                ...state,
                items: state.items.filter(i => i.id !== action.payload)
            }
        case EMPTY_BASKET:
            return {
                ...state,
                items: []
            }
        default:
            return state
    }
}

export default combineReducers({
    basketReducer,
})
