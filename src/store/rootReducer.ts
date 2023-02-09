import { combineReducers } from '@reduxjs/toolkit'

import { api } from '../services/api'

export const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
})
