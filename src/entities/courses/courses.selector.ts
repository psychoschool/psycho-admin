import { RootState } from 'store/index'

export const selectCourses = (state: RootState) => state.collections.courses
