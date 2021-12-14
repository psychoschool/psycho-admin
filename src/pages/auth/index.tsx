import React, { useEffect } from 'react'
import { Outlet } from 'react-router'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from 'utils/store.util'
import { selectAuth } from 'entities/auth/auth.selector'
import { Box } from '@mui/material'

const AuthPage = () => {
  const navigate = useNavigate()
  const { authorized } = useAppSelector(selectAuth)

  useEffect(() => {
    if (authorized) navigate('/')
  }, [authorized, navigate])

  return (
    <Box
      sx={{
        display: 'grid',
        placeContent: 'center'
      }}
    >
      <Outlet />
    </Box>
  )
}

export default AuthPage
