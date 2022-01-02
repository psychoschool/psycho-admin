import { RootState } from 'store/index'

export const selectUsers = (state: RootState) => state.collections.users

export const selectUser = (state: RootState) => state.user.data

export const selectUserMeta = (state: RootState) => state.meta.user

export const selectCurrentUser = (state: RootState) => state.currentUser.data
