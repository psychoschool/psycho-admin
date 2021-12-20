import { resource } from 'utils/resource.util'
import { PSYCHO_API } from 'config/services'
import { LessonResponse } from 'resources/types'
import { normalizeLesson } from 'schemas/lesson.schema'

export const getUserCourses = resource((ctx, id: string) => ({
  ctx,
  name: 'getCourses',
  method: 'GET',
  serviceName: PSYCHO_API,
  url: `/lessons/user/${id}`,
  onSuccess: (response: Array<LessonResponse>) => normalizeLesson(response),
  onError: error => error
}))
