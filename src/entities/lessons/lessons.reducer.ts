import { lessonsCollectionReducer, lessonsMetaReducer } from './lessons.slice'

export default {
  collections: {
    lessons: lessonsCollectionReducer
  },
  meta: {
    lessons: lessonsMetaReducer
  }
}
