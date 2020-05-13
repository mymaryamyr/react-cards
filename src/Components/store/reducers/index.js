import { combineReducers } from 'redux';
import { ADD_ITEM, REMOVE_ITEM, EMPTY_BASKET } from '../constants/action-types'


const initialState = {
    items: [],
    total : 0,
};

function basketReducer(state= initialState, action) {
    switch ( action.type) {
        case ADD_ITEM:
            return {
                ...state,
                items: state.items.concat(action.payload),
            }
        case REMOVE_ITEM:
            return {
                ...state,
                items: state.items.filter(i => i.id !== action.payload),
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

export default basketReducer;