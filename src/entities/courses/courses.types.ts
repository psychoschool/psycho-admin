import { CourseResponse } from 'resources/types'

type CourseId = string
export type Course = CourseResponse
export type CoursesCollection = Collection<CourseId, Course>
