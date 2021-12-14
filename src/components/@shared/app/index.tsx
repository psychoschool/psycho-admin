import React, { createContext, useEffect, useMemo, useState } from 'react'
import { Route, Routes } from 'react-router'
import _throttle from 'lodash.throttle'
import loadable from '@loadable/component'
import { useNavigate } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material'

import { selectCurrentUser } from 'entities/user/user.selector'
import { useAppDispatch, useAppSelector } from 'utils/store.util'
import { useScreenActions } from 'entities/ui/ui.actions'
import { Drawer } from 'components/@shared/drawer'
import { Login } from 'components/auth/login'
import './styles.scss'
import { useUserActions } from 'entities/user/user.slice'
import { selectAuth } from 'entities/auth/auth.selector'

const HomePage = loadable(() => import('pages/home'))
const AuthPage = loadable(() => import('pages/auth'))
const CoursesPage = loadable(() => import('pages/courses'))
const NotFoundPage = loadable(() => import('pages/not-found'))
export const ColorModeContext = createContext({ toggleColorMode: () => {} })

export const App = () => {
  const dispatch = useAppDispatch()
  const { changeScreen } = useScreenActions(dispatch)
  const { getCurrentUser } = useUserActions(dispatch)
  const { authorized } = useAppSelector(selectAuth)
  const user = useAppSelector(selectCurrentUser)
  const navigate = useNavigate()
  const [mode, setMode] = useState<'light' | 'dark'>('light')

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'))
      }
    }),
    []
  )

  const theme = useMemo(() => createTheme({ palette: { mode } }), [mode])

  useEffect(() => {
    addEventListener('resize', _throttle(changeScreen, 500))
    changeScreen()
  }, [changeScreen])

  useEffect(() => {
    if (!user) navigate('/auth')
  }, [navigate, user])

  useEffect(() => {
    if (!user) getCurrentUser()
  }, [user, authorized, getCurrentUser])

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path='/' element={<Drawer />}>
            <Route index element={<HomePage />} />
            <Route path='courses' element={<CoursesPage />} />

            <Route element={<AuthPage />}>
              <Route path='auth' element={<Login />} />
            </Route>

            <Route path='*' element={<NotFoundPage />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
