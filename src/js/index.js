import store from './store'
import { addArticle, currentUser } from './actions/index'

window.store = store
window.addArticle = addArticle
window.currentUser = currentUser

store.subscribe(function () {
  console.log(store.getState())
})
