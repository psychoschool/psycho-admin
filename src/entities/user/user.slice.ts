import { useMemo } from 'react'
import { bindActionCreators, createAsyncThunk, createReducer, Dispatch } from '@reduxjs/toolkit'
import * as userResource from 'api/user.resource'
import { User, UsersCollection } from './user.types'

/*--------------------------------------------------
  actions
  -------------------------------------------------- */
export const getUsers = createAsyncThunk('user/fetchAllUsers', () => {
  return userResource.getAllUsers({}, {})
})

export const getCurrentUser = createAsyncThunk('auth/checkAuth', () => {
  return userResource.getCurrentUser({}, {})
})

/*--------------------------------------------------
  dispatch actions
  -------------------------------------------------- */
export const useUserActions = (dispatch: Dispatch) => {
  return useMemo(() => bindActionCreators({ getUsers, getCurrentUser }, dispatch), [dispatch])
}

/*--------------------------------------------------
  reducers
  -------------------------------------------------- */
export const usersCollectionReducer = createReducer<UsersCollection>({}, builder => {
  builder.addCase(getUsers.fulfilled, (state, action) => {
    return action.payload
  })
})

export const userMetaReducer = createReducer<{ data: User | null }>({ data: null }, builder => {
  builder.addCase(getCurrentUser.fulfilled, (state, action) => {
    return { data: action.payload }
  })
})
