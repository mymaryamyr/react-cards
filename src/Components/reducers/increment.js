

const INCREMENT = "INCREMENT"

const initialState = {
    count: 0
};
function increment (state = initialState, action) {
    if(action.type == INCREMENT) {
        return {
            count: action.count + 1
        }
    }
    return state
}

export default increment;