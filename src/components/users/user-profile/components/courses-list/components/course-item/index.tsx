import React, { FC, useState } from 'react'
import css from 'components/users/user-profile/components/courses-list/styles.scss'
import { Avatar, Chip, Divider, IconButton, Paper, Typography } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { Lesson } from 'entities/lessons/lessons.types'
import { ConfirmDialog } from 'components/users/user-profile/components/courses-list/components/confirm-dialog'

interface Props {
  index: number
  lesson: Lesson
}
export const CourseItem: FC<Props> = ({ lesson, index }) => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <Paper sx={{ p: 1, mb: 1 }}>
        <div className={css.row}>
          <Avatar>{++index}</Avatar>
          <Typography>{lesson.course.title}</Typography>
          <Chip
            avatar={<Avatar>{`${lesson.course.author.firstName[0]}`}</Avatar>}
            label={lesson.course.author.firstName}
          />
          <Chip label={lesson.course.paidPlans[lesson.paidPlan].name} />
          <div />
          <IconButton>
            <EditIcon />
          </IconButton>
          <Divider orientation='vertical' />
          <IconButton onClick={handleOpen}>
            <DeleteIcon />
          </IconButton>
        </div>
      </Paper>

      <ConfirmDialog lessonId={lesson.id} open={open} handleClose={handleClose} />
    </>
  )
}
