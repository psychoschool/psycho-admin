import { useMemo } from 'react'
import { bindActionCreators, createAsyncThunk, createReducer, Dispatch } from '@reduxjs/toolkit'
import * as lessonResource from 'api/lesson.resource'
import { LessonsCollection } from './lessons.types'
import { AddLessonParam } from 'resources/types'

/*--------------------------------------------------
  actions
  -------------------------------------------------- */
export const getUserLesson = createAsyncThunk('lessons/fetchAllCourses', (id: string) => {
  return lessonResource.getUserLessons({}, id)
})

export const addLesson = createAsyncThunk('lessons/addLesson', (params: AddLessonParam) => {
  return lessonResource.addLesson({}, params)
})

/*--------------------------------------------------
  dispatch actions
  -------------------------------------------------- */
export const useLessonActions = (dispatch: Dispatch) => {
  return useMemo(() => bindActionCreators({ getUserLesson, addLesson }, dispatch), [dispatch])
}

/*--------------------------------------------------
  reducers
  -------------------------------------------------- */
export const lessonsCollectionReducer = createReducer<LessonsCollection>({}, builder => {
  builder.addCase(getUserLesson.fulfilled, (state, action) => {
    return action.payload
  })
})
