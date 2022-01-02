import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router'
import _throttle from 'lodash.throttle'
import loadable from '@loadable/component'
import { useNavigate } from 'react-router-dom'

import { useScreenActions } from 'entities/ui/ui.actions'
import { useUserActions } from 'entities/user/user.slice'
import { selectAuth } from 'entities/auth/auth.selector'
import { useAppDispatch, useAppSelector } from 'utils/store.util'
import { Drawer } from 'components/@shared/drawer'
import { Login } from 'components/auth/login'
import { ThemeProvider } from '../theme'
import { UserProfile } from 'components/users/user-profile'
import './styles.scss'

const HomePage = loadable(() => import('pages/home'))
const UsersPage = loadable(() => import('pages/users'))
const AuthPage = loadable(() => import('pages/auth'))
const CoursesPage = loadable(() => import('pages/courses'))
const NotFoundPage = loadable(() => import('pages/not-found'))

export const App = () => {
  const dispatch = useAppDispatch()
  const { changeScreen } = useScreenActions(dispatch)
  const { getCurrentUser } = useUserActions(dispatch)
  const { authorized, status } = useAppSelector(selectAuth)
  const navigate = useNavigate()

  useEffect(() => {
    addEventListener('resize', _throttle(changeScreen, 500))
    changeScreen()
  }, [changeScreen])

  useEffect(() => {
    getCurrentUser()
  }, [getCurrentUser])

  useEffect(() => {
    if (!authorized && status !== 'pending') navigate('/auth')
  }, [authorized, navigate, getCurrentUser, status])

  if (status === 'pending') return null

  return (
    <ThemeProvider>
      <Routes>
        <Route path='/' element={<Drawer />}>
          <Route index element={<HomePage />} />

          <Route path='/users' element={<UsersPage />} />
          <Route path='/users/:id' element={<UserProfile />} />

          <Route path='/courses' element={<CoursesPage />} />

          <Route element={<AuthPage />}>
            <Route path='auth' element={<Login />} />
          </Route>

          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  )
}
