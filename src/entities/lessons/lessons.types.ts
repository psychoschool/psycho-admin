import { LessonResponse } from 'resources/types'

type LessonId = string
export type Lesson = LessonResponse
export type LessonsCollection = Collection<LessonId, Lesson>
