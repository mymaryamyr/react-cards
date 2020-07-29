import { ADD_ITEM, REMOVE_ITEM, EMPTY_BASKET} from '../constants/action-types'
import produce from "immer"


const initialState = {
    items: []
};

function basketReducer(state= initialState, action) {
        switch ( action.type) {
        case ADD_ITEM: {
            const qty = Number(action.payload.qty) || 1
            return {
                ...state,
                items: {
                    ...state.items,
                    [action.payload.id]: {
                        ...state.items[action.payload.id],
                        id: action.payload.id,
                        count: state.items[action.payload.id] ? state.items[action.payload.id].count + qty : qty,
                    }
                },
            }
        }
        case REMOVE_ITEM: {
            return produce(state, draft => {
                delete draft.items[action.payload]
              });
            }
        case EMPTY_BASKET: {
            return {
                ...state,
                items: {}
            }
        }
        default:
            return state
    }
}

export default basketReducer;