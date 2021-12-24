import { useMemo } from 'react'
import { bindActionCreators, createAsyncThunk, createReducer, Dispatch } from '@reduxjs/toolkit'
import * as lessonResource from 'api/lesson.resource'
import { LessonsCollection } from './lessons.types'
import { AddLessonParam } from 'resources/types'

/*--------------------------------------------------
  actions
  -------------------------------------------------- */
export const getUserLessons = createAsyncThunk('lessons/getUserLessons', (id: string) => {
  return lessonResource.getUserLessons({}, id)
})

export const addLesson = createAsyncThunk('lessons/addLesson', (params: AddLessonParam) => {
  return lessonResource.addLesson({}, params)
})

export const removeLesson = createAsyncThunk('lessons/removeLesson', (id: string) => {
  return lessonResource.removeLesson({}, id)
})

/*--------------------------------------------------
  dispatch actions
  -------------------------------------------------- */
export const useLessonActions = (dispatch: Dispatch) => {
  return useMemo(() => bindActionCreators({ getUserLessons, addLesson, removeLesson }, dispatch), [dispatch])
}

/*--------------------------------------------------
  reducers
  -------------------------------------------------- */
export const lessonsCollectionReducer = createReducer<LessonsCollection>({}, builder => {
  builder
    .addCase(getUserLessons.fulfilled, (state, action) => {
      return action.payload
    })
    .addCase(removeLesson.fulfilled, (state, action) => {
      delete state[action.payload.id]
    })
})

export const lessonsMetaReducer = createReducer<{ status: 'succeeded' | 'pending' | 'failed' }>(
  {
    status: 'pending'
  },
  builder => {
    builder
      .addCase(getUserLessons.fulfilled, () => ({ status: 'succeeded' }))
      .addCase(getUserLessons.pending, () => ({ status: 'pending' }))
      .addCase(getUserLessons.rejected, () => ({ status: 'failed' }))
  }
)
