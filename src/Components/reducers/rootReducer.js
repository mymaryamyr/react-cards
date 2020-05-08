
const ADD_ITEM = "ADD_ITEM"

const initialState = {
    items: []
};

function rootReducer(state= initialState, action) {
    if (action.type === ADD_ITEM) {
        return Object.assign({} , state, {
            items: state.items.concat(action.payload)
        })
    }
    return state;
}

export default rootReducer;