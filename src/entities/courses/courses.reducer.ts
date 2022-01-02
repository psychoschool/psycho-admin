import { coursesCollectionReducer, coursesMetaReducer } from 'entities/courses/courses.slice'

export default {
  collections: {
    courses: coursesCollectionReducer
  },
  meta: {
    courses: coursesMetaReducer
  }
}
