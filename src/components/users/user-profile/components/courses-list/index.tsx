import React, { FC, useEffect, useState } from 'react'
import { Button, Typography, useTheme } from '@mui/material'
import { useAppDispatch, useAppSelector } from 'utils/store.util'
import { selectLessons, selectLessonsMeta } from 'entities/lessons/lessons.selector'
import { useLessonActions } from 'entities/lessons/lessons.slice'
import { CourseItem } from './components/course-item'
import { CoursesDialog } from '../courses-dialog'
import { EmptyState } from './empty-state'
import css from './styles.scss'

interface Props {
  userId: string
}
export const CoursesList: FC<Props> = ({ userId }) => {
  const dispatch = useAppDispatch()
  const lessons = useAppSelector(selectLessons)
  const { status } = useAppSelector(selectLessonsMeta)
  const { getUserLessons } = useLessonActions(dispatch)
  const [open, setOpen] = useState(false)
  const theme = useTheme()

  useEffect(() => {
    getUserLessons(userId)
  }, [getUserLessons, userId])

  const handleOpen = () => setOpen(true)

  const handleClose = () => setOpen(false)

  const content = (
    <>
      {!Object.entries(lessons).length && <EmptyState theme={theme} />}

      {Object.entries(lessons).map(([id, lesson], index) => (
        <CourseItem key={id} lesson={lesson} index={index} />
      ))}
    </>
  )

  return (
    <>
      <div className={css.actions}>
        <Typography variant='h6'>Курсы</Typography>
        <Button variant='contained' onClick={handleOpen}>
          Add
        </Button>
      </div>

      {status !== 'pending' && content}

      <CoursesDialog open={open} userId={userId} handleClose={handleClose} />
    </>
  )
}
