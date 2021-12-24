import { resource } from 'utils/resource.util'
import { PSYCHO_API } from 'config/services'
import { CourseResponse } from 'resources/types'
import { normalizeCourses } from 'schemas/course.schema'

export const getAllCourses = resource(ctx => ({
  ctx,
  name: 'getCourses',
  method: 'GET',
  serviceName: PSYCHO_API,
  url: '/courses',
  onSuccess: (response: Response<Array<CourseResponse>>) => normalizeCourses(response.result),
  onError: error => error
}))
