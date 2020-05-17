import { ADD_ITEM, EMPTY_BASKET, REMOVE_ITEM, INCREMENT, ADD_DISCOUNT } from '../constants/action-types'


export function addItem(payload) {
  return { type: ADD_ITEM, payload };
}

export function increment(payload) {
  return { type: INCREMENT, payload };
}

export function emptyBasket() {
  return { type: EMPTY_BASKET };
}

export function removeItem(payload) {
  return { type: REMOVE_ITEM, payload };
}

export function addDiscount(payload) {
  return { type: ADD_DISCOUNT, payload };
}