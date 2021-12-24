import { RootState } from 'store/index'

export const selectCourses = (state: RootState) => state.collections.courses

export const selectCoursesMeta = (state: RootState) => state.meta.courses
