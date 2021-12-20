import React, { FC, forwardRef, useEffect, useState } from 'react'
import {
  Button,
  Dialog,
  ListItemText,
  ListItem,
  List,
  Divider,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Slide,
  Stack,
  ListItemIcon,
  Checkbox,
  Chip
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { TransitionProps } from '@mui/material/transitions'
import { useAppDispatch, useAppSelector } from 'utils/store.util'
import { useCourseActions } from 'entities/courses/courses.slice'
import { selectCourses } from 'entities/courses/courses.selector'

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction='up' ref={ref} {...props} />
})

interface Props {
  open: boolean
  handleClose: () => void
}
type SelectedCollection = Collection<string, string>
export const CoursesDialog: FC<Props> = ({ open, handleClose }) => {
  const dispatch = useAppDispatch()
  const { getCourses } = useCourseActions(dispatch)
  const courses = useAppSelector(selectCourses)
  const [selected, setSelected] = useState<SelectedCollection>({})

  const onCLose = () => {
    setSelected({})
    handleClose()
  }

  useEffect(() => {
    if (open) getCourses()
  }, [getCourses, open])

  const handleSelect = (id: string, planId: string) => () => {
    if (selected[id] === planId) {
      setSelected(prev => {
        delete prev[id]
        return { ...prev }
      })
    } else {
      setSelected(prev => ({ ...prev, [id]: planId }))
    }
  }

  const removeSelect = (id: string) => () => {
    if (id in selected) {
      setSelected(prev => {
        delete prev[id]
        return { ...prev }
      })
    }
  }

  const isSelected = (id: string) => id in selected

  return (
    <Dialog fullScreen open={open} onClose={onCLose} TransitionComponent={Transition}>
      <AppBar sx={{ position: 'relative' }}>
        <Toolbar>
          <IconButton edge='start' color='inherit' onClick={onCLose} aria-label='close'>
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant='h6' component='div'>
            Курсы
          </Typography>
          <Button autoFocus color='inherit' onClick={onCLose}>
            добавить
          </Button>
        </Toolbar>
      </AppBar>
      <List>
        {Object.entries(courses).map(([id, course]) => (
          <React.Fragment key={id}>
            <ListItem>
              <ListItemIcon>
                <Checkbox
                  onClick={removeSelect(id)}
                  checked={isSelected(id)}
                  edge='start'
                  tabIndex={-1}
                  disableRipple
                />
              </ListItemIcon>
              <ListItemText primary={course.title} secondary={`Author: ${course.author.firstName}`} />

              <Stack direction='row' spacing={1}>
                {course.paidPlans.map(plan => (
                  <Chip
                    key={plan.id}
                    variant={selected?.[id] === plan.id ? 'filled' : 'outlined'}
                    color={selected?.[id] === plan.id ? 'primary' : 'default'}
                    label={plan.name}
                    onClick={handleSelect(id, plan.id)}
                  />
                ))}
              </Stack>
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Dialog>
  )
}
