import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Avatar, Box, Button, Divider, Paper, Stack, TextField } from '@mui/material'
import { useAppDispatch, useAppSelector } from 'utils/store.util'
import { stringAvatar } from 'components/users/utils/color.util'
import { useUserActions } from 'entities/user/user.slice'
import { selectUserMeta } from 'entities/user/user.selector'
import { RolesSelect } from './components/roles-select'
import { CoursesList } from './components/courses-list'
import css from './styles.scss'

export const UserProfile = () => {
  const { id } = useParams()
  const dispatch = useAppDispatch()
  const { getUserById, updateUserById } = useUserActions(dispatch)
  const user = useAppSelector(selectUserMeta)
  const [role, setRole] = useState(user?.role)

  useEffect(() => {
    if (id) getUserById(id)
  }, [id, getUserById])

  const handleUpdate = () => {
    updateUserById({ ...user, role })
  }

  if (!user || !id) return null

  return (
    <Box>
      <Paper sx={{ p: 2 }}>
        <div className={css.wrapper}>
          <Avatar style={{ width: 120, height: 120, fontSize: 72 }} {...stringAvatar(user.firstName)} />

          <Stack spacing={2}>
            <Stack direction='row' justifyContent='space-between'>
              <TextField sx={{ width: 200 }} label='Name' value={user.firstName} variant='standard' />
              <Button onClick={handleUpdate}>Update</Button>
            </Stack>

            <Stack direction='row' spacing={4} divider={<Divider orientation='vertical' flexItem />}>
              <TextField sx={{ width: 200 }} label='Email' value={user.email} variant='standard' />
              <TextField sx={{ width: 200 }} label='Phone' value={user.phone} variant='standard' />
              <RolesSelect initialValue={user.role} onChange={role => setRole(role)} />
            </Stack>
          </Stack>
        </div>
      </Paper>

      <CoursesList userId={id} />
    </Box>
  )
}
