import React from 'react'
import { Outlet } from 'react-router-dom'
import Box from '@mui/material/Box'
import MuiDrawer from '@mui/material/Drawer'
import CssBaseline from '@mui/material/CssBaseline'
import Toolbar from '@mui/material/Toolbar'
import { useAppSelector } from 'utils/store.util'
import { selectAuth } from 'entities/auth/auth.selector'
import { NavMenu } from 'components/@shared/drawer/nav-menu'
import { NavBar } from 'components/@shared/drawer/nav-bar'

const drawerWidth = 240

export const Drawer = () => {
  const { authorized } = useAppSelector(selectAuth)

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <NavBar />

      <MuiDrawer
        open={authorized}
        variant={authorized ? 'persistent' : undefined}
        sx={{
          width: drawerWidth,
          ['& .MuiDrawer-paper']: { width: drawerWidth, boxSizing: 'border-box' }
        }}
      >
        <NavMenu />
      </MuiDrawer>

      <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />

        <Outlet />
      </Box>
    </Box>
  )
}
