import { combineReducers } from 'redux';
import { ADD_ITEM, REMOVE_ITEM, EMPTY_BASKET, INCREMENT } from '../constants/action-types'
import update from 'immutability-helper';


const initialState = {
    items: {},
    total : 0,
};

function basketReducer(state= initialState, action) {
    console.log(action.payload)
    switch ( action.type) {
        case ADD_ITEM:
            return {
                ...state,
                items: {
                    ...state.items,
                    [action.payload.id]: {
                        ...state.items[action.payload.id],
                        id: action.payload.id,
                        count: state.items[action.payload.id] ? state.items[action.payload.id].count + 1 : 1,
                    }
                }
            }
        case INCREMENT:
            return {
                ...state,
                total: state.total + 1
            }
        case REMOVE_ITEM:
            return {
                ...state,
                items: state.items.filter(i => i.id !== action.payload.toString()),
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