import React, { FC } from 'react'
import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material'
import { useLessonActions } from 'entities/lessons/lessons.slice'
import { useAppDispatch } from 'utils/store.util'

interface Props {
  open: boolean
  lessonId: string
  handleClose: () => void
}
export const ConfirmDialog: FC<Props> = ({ open, handleClose, lessonId }) => {
  const dispatch = useAppDispatch()
  const { removeLesson } = useLessonActions(dispatch)

  const onRemove = () => {
    removeLesson(lessonId)
    handleClose()
  }
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Вы уверены что хотите удалить курс?</DialogTitle>
      <DialogActions>
        <Button onClick={handleClose}>Отмена</Button>
        <Button onClick={onRemove}>Удалить</Button>
      </DialogActions>
    </Dialog>
  )
}
