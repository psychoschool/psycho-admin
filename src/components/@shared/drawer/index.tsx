import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Box from '@mui/material/Box'
import MuiDrawer from '@mui/material/Drawer'
import AppBar from '@mui/material/AppBar'
import CssBaseline from '@mui/material/CssBaseline'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'
import ListItem from '@mui/material/ListItem'
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded'
import ListItemText from '@mui/material/ListItemText'
import VideoRoundedIcon from '@mui/icons-material/OndemandVideoRounded'
import { IconButton, ListItemIcon, useTheme } from '@mui/material'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import { ColorModeContext } from 'components/@shared/app'

const drawerWidth = 240

export const Drawer = () => {
  const theme = useTheme()
  const colorMode = useContext(ColorModeContext)

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position='fixed' sx={{ zIndex: theme => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant='h6' noWrap component='div' sx={{ flexGrow: 1 }}>
            Psychoschool Admin
          </Typography>

          <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color='inherit'>
            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>
      <MuiDrawer
        variant='permanent'
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          ['& .MuiDrawer-paper']: { width: drawerWidth, boxSizing: 'border-box' }
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <Link to='/'>
              <ListItem button>
                <ListItemIcon>{<PeopleAltRoundedIcon />}</ListItemIcon>
                <ListItemText primary='Пользователи' />
              </ListItem>
            </Link>
            <Link to='/courses'>
              <ListItem button>
                <ListItemIcon>{<VideoRoundedIcon />}</ListItemIcon>
                <ListItemText primary='Курсы' />
              </ListItem>
            </Link>
          </List>
        </Box>
      </MuiDrawer>
      <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  )
}
