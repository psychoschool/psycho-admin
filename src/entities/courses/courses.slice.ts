import { useMemo } from 'react'
import { bindActionCreators, createAsyncThunk, createReducer, Dispatch } from '@reduxjs/toolkit'
import * as courseResource from 'api/course.resource'
import { CoursesCollection } from './courses.types'

/*--------------------------------------------------
  actions
  -------------------------------------------------- */
export const getCourses = createAsyncThunk('courses/fetchAllCourses', () => {
  return courseResource.getAllCourses({}, {})
})

/*--------------------------------------------------
  dispatch actions
  -------------------------------------------------- */
export const useCourseActions = (dispatch: Dispatch) => {
  return useMemo(() => bindActionCreators({ getCourses }, dispatch), [dispatch])
}

/*--------------------------------------------------
  reducers
  -------------------------------------------------- */
export const coursesCollectionReducer = createReducer<CoursesCollection>({}, builder => {
  builder.addCase(getCourses.fulfilled, (state, action) => {
    return action.payload
  })
})

export const coursesMetaReducer = createReducer<{ status: 'succeeded' | 'pending' | 'failed' }>(
  { status: 'pending' },
  builder => {
    builder
      .addCase(getCourses.fulfilled, () => ({ status: 'succeeded' }))
      .addCase(getCourses.pending, () => ({ status: 'pending' }))
      .addCase(getCourses.rejected, () => ({ status: 'failed' }))
  }
)
