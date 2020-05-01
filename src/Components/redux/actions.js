

export const ADD_TO_CARD = "ADD_TO_CARD"
export const INCREMNENT = "INCREMNENT"

export function addToCard (id) {
    return {
        type: ADD_TO_CARD,
        id
    }
}
export function increment (count) {
    return {
        type: INCREMNENT,
        count
    }
}
