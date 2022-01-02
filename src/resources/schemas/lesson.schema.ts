import { LessonResponse } from 'resources/types'
import { LessonsCollection } from 'entities/lessons/lessons.types'
import { normalizeCourse } from 'schemas/course.schema'

export const normalizeLesson = (response: Array<LessonResponse>): LessonsCollection => {
  return response.reduce((acc, lesson) => {
    const { course } = lesson
    acc[lesson.id] = { ...lesson, course: normalizeCourse(course) }

    return acc
  }, {} as LessonsCollection)
}
