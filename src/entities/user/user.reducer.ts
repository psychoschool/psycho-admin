import { userReducer, currentUserReducer, usersCollectionReducer, userMetaReducer } from './user.slice'

export default {
  collections: {
    users: usersCollectionReducer
  },
  currentUser: currentUserReducer,
  user: userReducer,
  meta: {
    user: userMetaReducer
  }
}
