import { CourseResponse } from 'resources/types'
import { Course, CoursesCollection } from 'entities/courses/courses.types'

export const normalizeCourses = (response: Array<CourseResponse>): CoursesCollection => {
  return response.reduce((acc, course) => {
    acc[course.id] = normalizeCourse(course)

    return acc
  }, {} as CoursesCollection)
}

export const normalizeCourse = (course: CourseResponse): Course => {
  const paidPlans = course.paidPlans.reduce((acc, plan) => {
    acc[plan.id] = plan
    return acc
  }, {} as Course['paidPlans'])

  return { ...course, paidPlans }
}
