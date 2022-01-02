import { CourseResponse } from 'resources/types/course.types'
import { UserResponse } from 'resources/types/user.types'

export type LessonResponse = {
  id: string
  course: CourseResponse
  user: UserResponse
  url: string
  completedLectures: Array<string>
  purchasedPrice?: number
  isFree: boolean
}

export interface AddLessonParam {
  userId: string
  courseId: string
  purchasedPrice?: number
  url: string
  onSuccess: () => void
}
