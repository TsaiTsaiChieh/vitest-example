import { combineReducers } from '@reduxjs/toolkit'

import { api } from '../services/api'
import counterReducer from './reducers/counterSlice'

export const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  counter: counterReducer,
})
