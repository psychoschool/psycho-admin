import React, { useEffect } from 'react'
import { Box } from '@mui/material'
import { useAppDispatch, useAppSelector } from 'utils/store.util'
import { useUserActions } from 'entities/user/user.slice'
import { UsersGrid } from 'components/home/users-grid'
import { selectUsers } from 'entities/user/user.selector'

export const Home = () => {
  const dispatch = useAppDispatch()
  const { getUsers } = useUserActions(dispatch)
  const users = useAppSelector(selectUsers)

  useEffect(() => {
    getUsers()
  }, [getUsers])

  const items = Object.values(users).map(user => ({ ...user, avatar: `${user.firstName} .` }))

  return (
    <Box>
      <UsersGrid items={items} />
    </Box>
  )
}
