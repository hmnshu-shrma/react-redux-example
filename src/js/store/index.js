import { createStore } from 'redux'
import rootReducer from '../reducers/index'

const store = createStore(rootReducer)

store.subscribe(function () {
  console.log(store.getState())
})
export default store