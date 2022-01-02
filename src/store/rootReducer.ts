import { AnyAction, combineReducers, Reducer } from '@reduxjs/toolkit'
import { RouterState } from 'redux-first-history'

import uiReducer from 'entities/ui/ui.reducer'
import { exampleApi } from 'entities/example/example.api'
import userReducer from 'entities/user/user.reducer'
import courseReducer from 'entities/courses/courses.reducer'
import lessonsReducer from 'entities/lessons/lessons.reducer'
import authReducer from 'entities/auth/auth.reducer'

export const createRootReducer = (routerReducer: Reducer<RouterState, AnyAction>) =>
  combineReducers({
    router: routerReducer,
    collections: combineReducers({
      users: userReducer.collections.users,
      courses: courseReducer.collections.courses,
      lessons: lessonsReducer.collections.lessons
    }),
    meta: combineReducers({
      user: userReducer.meta.user,
      courses: courseReducer.meta.courses,
      lessons: lessonsReducer.meta.lessons
    }),
    user: userReducer.user,
    currentUser: userReducer.currentUser,
    auth: authReducer,
    [exampleApi.reducerPath]: exampleApi.reducer,
    ui: uiReducer
  })
