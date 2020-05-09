import { ADD_ITEM, EMPTY_BASKET, REMOVE_ITEM, INCREMENT } from '../constants/action-types'


export function addItem(payload) {
  return { type: ADD_ITEM, payload };
}

export function emptyBasket() {
  return { type: EMPTY_BASKET };
}

export function increment(count) {
    return { type: INCREMENT, count };
}

export function removeItem(payload) {
  return { type: REMOVE_ITEM, payload };
}
