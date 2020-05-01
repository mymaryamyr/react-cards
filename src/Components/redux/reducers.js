import { INCREMNENT, ADD_TO_CARD } from "./actions"



const initialState = {
    counts: 0,
    cards: []
}

function basketInfo(state = initialState, action) {
    switch(action.type) {
        case INCREMNENT:
            return Object.assign({}, state, {
                count: action.count
            })
        case ADD_TO_CARD:
            return Object.assign({}, state, {
                cards: [
                    ...state.cards,
                    {
                        id:action.id,
                        complited: false
                    }
                ]
            })
        default: 
            return state    
    }
}

export default basketInfo
