import { useMemo } from 'react'
import { bindActionCreators, createAsyncThunk, createReducer, Dispatch } from '@reduxjs/toolkit'
import * as lessonResource from 'api/lesson.resource'
import { LessonsCollection } from './lessons.types'

/*--------------------------------------------------
  actions
  -------------------------------------------------- */
export const getUserCourses = createAsyncThunk('lessons/fetchAllCourses', (id: string) => {
  return lessonResource.getUserCourses({}, id)
})

/*--------------------------------------------------
  dispatch actions
  -------------------------------------------------- */
export const useLessonActions = (dispatch: Dispatch) => {
  return useMemo(() => bindActionCreators({ getUserCourses }, dispatch), [dispatch])
}

/*--------------------------------------------------
  reducers
  -------------------------------------------------- */
export const lessonsCollectionReducer = createReducer<LessonsCollection>({}, builder => {
  builder.addCase(getUserCourses.fulfilled, (state, action) => {
    return action.payload
  })
})
