import React, { FC, useEffect } from 'react'
import { Dialog } from '@mui/material'
import { useAppDispatch, useAppSelector } from 'utils/store.util'
import { useCourseActions } from 'entities/courses/courses.slice'
import { useLessonActions } from 'entities/lessons/lessons.slice'
import { selectCourses } from 'entities/courses/courses.selector'
import { CoursesList } from './courses-list'
import { useSelected } from './useSelected'
import { Transition } from './transition'
import { Header } from './header'

interface Props {
  userId: string
  open: boolean
  handleClose: () => void
}
export const CoursesDialog: FC<Props> = ({ open, handleClose, userId }) => {
  const dispatch = useAppDispatch()
  const { getCourses } = useCourseActions(dispatch)
  const { addLesson, getUserLessons } = useLessonActions(dispatch)
  const courses = useAppSelector(selectCourses)
  const { selected, removeSelect, handleSelect, resetSelected } = useSelected()

  useEffect(() => {
    if (open) getCourses()
  }, [getCourses, open])

  const onCLose = () => {
    resetSelected()
    handleClose()
  }

  const onSubmit = () => {
    const courseId = Object.keys(selected)[0]
    const paidPlan = Object.values(selected)[0]

    if (Object.keys(selected).length) {
      addLesson({
        userId,
        courseId,
        paidPlan,
        onSuccess: () => {
          getUserLessons(userId)
        }
      })
    }

    handleClose()
  }

  return (
    <Dialog fullScreen open={open} onClose={onCLose} TransitionComponent={Transition}>
      <Header onClose={onCLose} onSubmit={onSubmit} />

      <CoursesList courses={courses} selected={selected} removeSelect={removeSelect} handleSelect={handleSelect} />
    </Dialog>
  )
}
