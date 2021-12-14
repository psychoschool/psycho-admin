import React, { useContext } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Button, IconButton, useTheme } from '@mui/material'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import { ColorModeContext } from 'components/@shared/theme'
import { useAppDispatch, useAppSelector } from 'utils/store.util'
import { useAuthActions } from 'entities/auth/auth.slice'
import { selectAuth } from 'entities/auth/auth.selector'

export const NavBar = () => {
  const theme = useTheme()
  const colorMode = useContext(ColorModeContext)
  const dispatch = useAppDispatch()
  const { signOut } = useAuthActions(dispatch)
  const { authorized } = useAppSelector(selectAuth)

  return (
    <AppBar position='fixed' sx={{ zIndex: theme => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <Typography variant='h6' noWrap component='div' sx={{ flexGrow: 1 }}>
          Psycho Admin
        </Typography>

        <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color='inherit'>
          {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
        {authorized && (
          <Button color='inherit' onClick={signOut}>
            Выйти
          </Button>
        )}
      </Toolbar>
    </AppBar>
  )
}
