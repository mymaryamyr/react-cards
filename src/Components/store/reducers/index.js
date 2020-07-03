import { ADD_ITEM, REMOVE_ITEM, EMPTY_BASKET, INCREMENT} from '../constants/action-types'
import produce from "immer"


const initialState = {
    items: [],
    totalCount : 0,
    text: ""
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
            return produce(state, draft => {
                draft.totalCount = draft.totalCount + 1
              });
        case REMOVE_ITEM:
            return produce(state, draft => {
                draft.totalCount = draft.totalCount - draft.items[action.payload].count
                delete draft.items[action.payload]
              });
        case EMPTY_BASKET:
            return {
                ...state,
                items: {},
                totalCount: 0,
            }
        default:
            return state
    }
}

export default basketReducer;