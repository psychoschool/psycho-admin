import React, { FC, useEffect, useState } from 'react'
import { Avatar, Button, Chip, IconButton, Paper, Typography } from '@mui/material'
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
  const dispatch = useAppDispatch()
  const lessons = useAppSelector(selectLessons)
  const { getUserLesson } = useLessonActions(dispatch)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    getUserLesson(id)
  }, [getUserLesson, id])

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
        <Paper key={id} sx={{ p: 1 }}>
          <div className={css.row}>
            <Avatar>{index}</Avatar>
            <Typography>{lesson.course.title}</Typography>
            <Chip
              avatar={<Avatar>{`${lesson.course.author.firstName[0]}`}</Avatar>}
              label={lesson.course.author.firstName}
            />
            <Chip label={lesson.course.paidPlans[lesson.paidPlan].name} />
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

      <CoursesDialog open={open} handleClose={handleClose} userId={id} />
    </>
  )
}
