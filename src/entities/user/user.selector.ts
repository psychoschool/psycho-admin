import { RootState } from 'store/index'

export const selectUsers = (state: RootState) => state.users

export const selectCurrentUser = (state: RootState) => state.user.data
