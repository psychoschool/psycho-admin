import camelize from 'camelize'
import { CourseResponse } from 'resources/types'
import { CoursesCollection } from 'entities/courses/courses.types'

export const normalizeCourse = (response: Array<CourseResponse>): CoursesCollection => {
  return response.reduce((acc, course) => {
    acc[course.id] = camelize(course)

    return acc
  }, {} as CoursesCollection)
}
