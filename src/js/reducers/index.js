import { ADD_ARTICLE, CURRENT_USER } from '../constants/action-types'

const initialState = {
  articles: [],
  username: []
}

function rootReducer (state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    })
  } else if (action.type === CURRENT_USER) {
    return Object.assign({}, state, {
      username: state.username.concat(action.payload)
    })
  }
  return state
}
export default rootReducer
