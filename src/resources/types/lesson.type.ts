import { CourseResponse } from 'resources/types/course.types'
import { UserResponse } from 'resources/types/user.types'

export type LessonResponse = {
  id: string
  course: CourseResponse
  user: UserResponse
  completedLectures: Array<string>
  paidPlan: string
}
