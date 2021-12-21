import { CourseResponse } from 'resources/types/course.types'
import { UserResponse } from 'resources/types/user.types'

export type LessonResponse = {
  id: string
  course: CourseResponse
  user: UserResponse
  url: string
  completedLectures: Array<string>
  paidPlan: string
}

export interface AddLessonParam {
  userId: string
  courseId: string
  paidPlan: string
  url: string
  onSuccess: () => void
}
