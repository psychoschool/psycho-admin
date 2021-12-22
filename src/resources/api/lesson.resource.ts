import { resource } from 'utils/resource.util'
import { PSYCHO_API } from 'config/services'
import { AddLessonParam, LessonResponse } from 'resources/types'
import { normalizeLesson } from 'schemas/lesson.schema'

export const getUserLessons = resource((ctx, id: string) => ({
  ctx,
  name: 'getUserLessons',
  method: 'GET',
  serviceName: PSYCHO_API,
  url: `/lessons/user/${id}`,
  onSuccess: (response: Response<Array<LessonResponse>>) => normalizeLesson(response.data),
  onError: error => error
}))

export const removeLesson = resource((ctx, lessonId: string) => ({
  ctx,
  name: 'removeLesson',
  method: 'DELETE',
  serviceName: PSYCHO_API,
  url: `/lessons/${lessonId}`,
  onSuccess: (response: { id: string }) => response,
  onError: error => error
}))

export const addLesson = resource((ctx, params: AddLessonParam) => ({
  ctx,
  name: 'getCourses',
  method: 'POST',
  serviceName: PSYCHO_API,
  url: '/lessons',
  data: {
    course: params.courseId,
    user: params.userId,
    paidPlan: params.paidPlan,
    url: params.url
  },
  onSuccess: (response: Response<Array<LessonResponse>>) => {
    params.onSuccess()
    return normalizeLesson(response.data)
  },
  onError: error => error
}))
