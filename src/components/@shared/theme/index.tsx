import React, { createContext, FC, useMemo, useState } from 'react'
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material'

export const ColorModeContext = createContext({ toggleColorMode: () => {} })
export const ThemeProvider: FC = ({ children }) => {
  const [mode, setMode] = useState<'light' | 'dark'>('light')
  const theme = useMemo(() => createTheme({ palette: { mode } }), [mode])

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'))
      }
    }),
    []
  )

  return (
    <ColorModeContext.Provider value={colorMode}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ColorModeContext.Provider>
  )
}
