import React, { createContext, useEffect, useMemo, useState } from 'react'
import { Route, Routes } from 'react-router'
import _throttle from 'lodash.throttle'
import loadable from '@loadable/component'
import { createTheme, ThemeProvider } from '@mui/material'

import { useAppDispatch } from 'utils/store.util'
import { useScreenActions } from 'entities/ui/ui.actions'
import { Drawer } from 'components/@shared/drawer'
import './styles.scss'

const HomePage = loadable(() => import('pages/home'))
const NotFoundPage = loadable(() => import('pages/not-found'))
export const ColorModeContext = createContext({ toggleColorMode: () => {} })

export const App = () => {
  const dispatch = useAppDispatch()
  const { changeScreen } = useScreenActions(dispatch)

  const [mode, setMode] = useState<'light' | 'dark'>('dark')

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

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path='/' element={<Drawer />}>
            <Route index element={<HomePage />} />

            <Route path='*' element={<NotFoundPage />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
