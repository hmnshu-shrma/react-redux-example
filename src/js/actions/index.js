import { ADD_ARTICLE, CURRENT_USER } from '../constants/action-types'

export function addArticle (payload) {
  return { type: ADD_ARTICLE, payload }
}

export function currentUser (payload) {
  return { type: CURRENT_USER, payload }
}
