import { RootState } from 'store/index'

export const selectLessons = (state: RootState) => state.collections.lessons
