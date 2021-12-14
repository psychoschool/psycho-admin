import React from 'react'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import { Link } from 'react-router-dom'
import ListItem from '@mui/material/ListItem'
import { ListItemIcon } from '@mui/material'
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded'
import ListItemText from '@mui/material/ListItemText'
import VideoRoundedIcon from '@mui/icons-material/OndemandVideoRounded'

export const NavMenu = () => {
  return (
    <>
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
    </>
  )
}
