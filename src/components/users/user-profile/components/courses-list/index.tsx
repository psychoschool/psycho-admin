import React, { useState } from 'react'
import { Button, Paper, Stack, Typography, useTheme } from '@mui/material'
import { CoursesDialog } from '../courses-dialog'
import css from './styles.scss'

export const CoursesList = () => {
  const theme = useTheme()
  const [open, setOpen] = useState(false)
  const background = theme.palette.mode === 'light' ? theme.palette.action.hover : ''

  const handleOpen = () => setOpen(true)

  const handleClose = () => setOpen(false)

  return (
    <>
      <div className={css.actions}>
        <Typography variant='h6'>Курсы</Typography>
        <Button variant='contained' onClick={handleOpen}>
          Add
        </Button>
      </div>
      <Paper sx={{ p: 2, background }}>
        <Stack direction='row'>
          <Typography>Course</Typography>
        </Stack>
      </Paper>

      <CoursesDialog open={open} handleClose={handleClose} />
    </>
  )
}
