import { CourseResponse } from 'resources/types'
import { Course, CoursesCollection } from 'entities/courses/courses.types'

export const normalizeCourse = (response: Array<CourseResponse>): CoursesCollection => {
  return response.reduce((acc, course) => {
    const paidPlans = course.paidPlans.reduce((acc, plan) => {
      acc[plan.id] = plan
      return acc
    }, {} as Course['paidPlans'])

    acc[course.id] = { ...course, paidPlans }

    return acc
  }, {} as CoursesCollection)
}
