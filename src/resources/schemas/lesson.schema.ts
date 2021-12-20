import camelize from 'camelize'
import { LessonResponse } from 'resources/types'
import { LessonsCollection } from 'entities/lessons/lessons.types'

export const normalizeLesson = (response: Array<LessonResponse>): LessonsCollection => {
  return response.reduce((acc, course) => {
    acc[course.id] = camelize(course)

    return acc
  }, {} as LessonsCollection)
}
