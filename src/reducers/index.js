import { combineReducers } from 'redux'
import events from './EventReducer'

const reducer = combineReducers({
  events
})

export default reducer
