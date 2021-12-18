import { userMetaReducer, currentUserReducer, usersCollectionReducer } from './user.slice'

export default {
  collections: {
    users: usersCollectionReducer
  },
  current: {
    user: currentUserReducer
  },
  meta: {
    user: userMetaReducer
  }
}
