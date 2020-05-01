import { creatStore } from 'redux'
import basketInfo from './reducers'
import { addToCard, increment } from './actions'
const store = creatStore(basketInfo)

console.log(store.getState())

const unsubscribe= store.subscribe(() => console.log(store.getState()))

store.dispatch(addToCard('Learn about actions'))
store.dispatch(increment(1))

unsubscribe()