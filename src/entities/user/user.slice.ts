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

export const getUserById = createAsyncThunk('auth/getUserById', (id: string) => {
  return userResource.getUserById({}, id)
})

export const updateUserById = createAsyncThunk('auth/updateUserById', (params: Partial<User>) => {
  return userResource.updateUserById({}, params)
})

/*--------------------------------------------------
  dispatch actions
  -------------------------------------------------- */
export const useUserActions = (dispatch: Dispatch) => {
  return useMemo(
    () => bindActionCreators({ getUsers, getCurrentUser, getUserById, updateUserById }, dispatch),
    [dispatch]
  )
}

/*--------------------------------------------------
  reducers
  -------------------------------------------------- */
export const usersCollectionReducer = createReducer<UsersCollection>({}, builder => {
  builder.addCase(getUsers.fulfilled, (state, action) => {
    return action.payload
  })
})

export const currentUserReducer = createReducer<{ data: User | null }>({ data: null }, builder => {
  builder.addCase(getCurrentUser.fulfilled, (state, action) => {
    return { data: action.payload }
  })
})

export const userReducer = createReducer<{ data: User | null }>({ data: null }, builder => {
  builder
    .addCase(getUserById.fulfilled, (state, action) => {
      return { data: action.payload }
    })
    .addCase(updateUserById.fulfilled, (state, action) => {
      return { data: action.payload }
    })
})

export const userMetaReducer = createReducer<{ status: 'succeeded' | 'pending' | 'failed' }>(
  { status: 'pending' },
  builder => {
    builder
      .addCase(getUserById.fulfilled, () => ({ status: 'succeeded' }))
      .addCase(getUserById.pending, () => ({ status: 'pending' }))
      .addCase(getUserById.rejected, () => ({ status: 'failed' }))
      .addCase(updateUserById.fulfilled, () => ({ status: 'succeeded' }))
      .addCase(updateUserById.pending, () => ({ status: 'pending' }))
      .addCase(updateUserById.rejected, () => ({ status: 'failed' }))
  }
)
