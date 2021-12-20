import React, { FC } from 'react'
import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

interface Props {
  onClose: () => void
  onSubmit: () => void
}

export const Header: FC<Props> = ({ onClose, onSubmit }) => {
  return (
    <AppBar sx={{ position: 'relative' }}>
      <Toolbar>
        <IconButton edge='start' color='inherit' onClick={onClose} aria-label='close'>
          <CloseIcon />
        </IconButton>
        <Typography sx={{ ml: 2, flex: 1 }} variant='h6' component='div'>
          Курсы
        </Typography>
        <Button autoFocus color='inherit' onClick={onSubmit}>
          добавить
        </Button>
      </Toolbar>
    </AppBar>
  )
}
