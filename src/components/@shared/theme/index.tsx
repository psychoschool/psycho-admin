import React, { createContext, FC, useMemo, useState } from 'react'
import { createTheme, PaletteMode, ThemeProvider as MuiThemeProvider } from '@mui/material'

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light' ? { background: { default: '#f1f4f6' } } : { background: { default: '#121212' } })
  }
})

export const ColorModeContext = createContext({ toggleColorMode: () => {} })
export const ThemeProvider: FC = ({ children }) => {
  const [mode, setMode] = useState<'light' | 'dark'>('light')
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode])

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
