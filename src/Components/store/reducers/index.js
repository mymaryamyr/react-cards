import { combineReducers } from 'redux';
import { ADD_ITEM, REMOVE_ITEM, EMPTY_BASKET, INCREMENT, ADD_DISCOUNT } from '../constants/action-types'
import update from 'immutability-helper';

Object.filter = function( obj, predicate) {
    let result = {}, key;

    for (key in obj) {
        if (obj.hasOwnProperty(key) && !predicate(obj[key])) {
            result[key] = obj[key];
        }
    }

    return result;
};

const initialState = {
    items: {},
    totalCount : 0,
    totalPrice: 0
};

function basketReducer(state= initialState, action) {
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
                },
            }
        case INCREMENT:
            return {
                ...state,
                totalCount: state.totalCount + 1
            }
        case REMOVE_ITEM:
            return {
                ...state,
                items: Object.filter(state.items ,id => id !== String(action.payload.id)),
                totalCount: 0
            }
            
        case EMPTY_BASKET:
            return {
                ...state,
                items: [],
                totalCount: 0,
                totalPrice: 0
            }
        default:
            return state
    }
}

export default basketReducer;