import React, { createContext, FC, useMemo } from 'react'
import { createTheme, PaletteMode, ThemeProvider as MuiThemeProvider } from '@mui/material'
import { useLocalStorage } from 'utils/local-storage.util'

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light' ? { background: { default: '#f1f4f6' } } : { background: { default: '#121212' } })
  }
})

export const ColorModeContext = createContext({ toggleColorMode: () => {} })
export const ThemeProvider: FC = ({ children }) => {
  const [mode, setMode] = useLocalStorage<'light' | 'dark'>('theme', 'light')

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode])

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(mode === 'light' ? 'dark' : 'light')
      }
    }),
    [mode, setMode]
  )

  return (
    <ColorModeContext.Provider value={colorMode}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ColorModeContext.Provider>
  )
}
