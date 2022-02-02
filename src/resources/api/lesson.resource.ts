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
  onSuccess: (response: Response<Array<LessonResponse>>) => normalizeLesson(response.result),
  onError: error => error
}))

export const removeLesson = resource((ctx, lessonId: string) => ({
  ctx,
  name: 'removeLesson',
  method: 'DELETE',
  serviceName: PSYCHO_API,
  url: `/lessons/${lessonId}`,
  onSuccess: (response: Response<{ id: string }>) => response.result,
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
    price: params.purchasedPrice,
    slug: params.slug
  },
  onSuccess: (response: Response<Array<LessonResponse>>) => {
    params.onSuccess()
    return normalizeLesson(response.result)
  },
  onError: error => error
}))
