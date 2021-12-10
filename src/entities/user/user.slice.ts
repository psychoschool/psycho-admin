import { useMemo } from 'react'
import { bindActionCreators, createAsyncThunk, createReducer, Dispatch } from '@reduxjs/toolkit'
import * as userResource from 'api/user.resource'
import type { User } from './user.types'

/*--------------------------------------------------
  actions
  -------------------------------------------------- */
export const getUsers = createAsyncThunk('auth/checkAuth', () => {
  return userResource.getUser({}, {})
})

/*--------------------------------------------------
  dispatch actions
  -------------------------------------------------- */
export const useUserActions = (dispatch: Dispatch) => {
  return useMemo(() => bindActionCreators({ getUsers }, dispatch), [dispatch])
}

/*--------------------------------------------------
  reducers
  -------------------------------------------------- */
export const userReducer = createReducer<User>({ user: null }, builder => {
  builder.addCase(getUsers.fulfilled, (state, action) => {
    return { user: action.payload }
  })
})
