import { RootState } from 'store/index'

export const selectUsers = (state: RootState) => state.collections.users

export const selectUserMeta = (state: RootState) => state.meta.user.data

export const selectCurrentUser = (state: RootState) => state.user.data
