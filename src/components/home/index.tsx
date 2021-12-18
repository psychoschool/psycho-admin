import React, { useEffect } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Avatar, Box, Button, Chip, Link, Paper, Typography } from '@mui/material'
import FaceIcon from '@mui/icons-material/Face'
import { useAppDispatch, useAppSelector } from 'utils/store.util'
import { useUserActions } from 'entities/user/user.slice'
import { selectUsers } from 'entities/user/user.selector'
import { stringAvatar } from 'components/home/utils/color.util'
import css from './styles.scss'

export const Home = () => {
  const dispatch = useAppDispatch()
  const { getUsers } = useUserActions(dispatch)
  const users = useAppSelector(selectUsers)

  useEffect(() => {
    getUsers()
  }, [getUsers])

  const items = Object.values(users).map(user => ({
    ...user,
    avatar: user.firstName
  }))

  return (
    <Box>
      {items.map(user => (
        <Paper key={user.id} sx={{ p: 1 }}>
          <div className={css.raw}>
            <Avatar {...stringAvatar(user.firstName)} />
            <Typography variant='body2'>{user.firstName}</Typography>
            <Typography variant='body2'>{user.phone}</Typography>
            <Link>{user.email}</Link>
            <Chip label={user.role} icon={<FaceIcon />} />
            <RouterLink to={`users/${user.id}`} style={{ marginLeft: 'auto' }}>
              <Button>edit</Button>
            </RouterLink>
          </div>
        </Paper>
      ))}
    </Box>
  )
}
