import React, { FC, useEffect, useState } from 'react'
import { Avatar, Button, Chip, IconButton, Paper, Stack, Typography, useTheme } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { useAppDispatch, useAppSelector } from 'utils/store.util'
import { selectLessons } from 'entities/lessons/lessons.selector'
import { useLessonActions } from 'entities/lessons/lessons.slice'
import { CoursesDialog } from '../courses-dialog'
import css from './styles.scss'

interface Props {
  id: string
}
export const CoursesList: FC<Props> = ({ id }) => {
  const theme = useTheme()
  const dispatch = useAppDispatch()
  const lessons = useAppSelector(selectLessons)
  const { getUserCourses } = useLessonActions(dispatch)
  const [open, setOpen] = useState(false)
  const background = theme.palette.mode === 'light' ? theme.palette.action.hover : ''

  useEffect(() => {
    getUserCourses(id)
  }, [getUserCourses, id])

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

      {Object.entries(lessons).map(([id, lesson], index) => (
        <Paper key={id} sx={{ p: 1, background }}>
          <div className={css.row}>
            <Avatar>{index}</Avatar>
            <Typography>{lesson.course.title}</Typography>
            <Chip
              avatar={<Avatar>{`${lesson.course.author.firstName[0]}`}</Avatar>}
              label={lesson.course.author.firstName}
            />
            <Chip label={lesson.paidPlan} />

            <div />

            <IconButton aria-label='delete'>
              <EditIcon />
            </IconButton>
            <IconButton aria-label='delete'>
              <DeleteIcon />
            </IconButton>
          </div>
        </Paper>
      ))}

      <CoursesDialog open={open} handleClose={handleClose} />
    </>
  )
}
