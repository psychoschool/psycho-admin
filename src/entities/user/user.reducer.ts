import { userMetaReducer, usersCollectionReducer } from './user.slice'

export default {
  collections: {
    users: usersCollectionReducer
  },
  meta: {
    user: userMetaReducer
  }
}
