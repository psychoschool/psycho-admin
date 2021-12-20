import React, { FC } from 'react'
import { Checkbox, Chip, Divider, List, ListItem, ListItemIcon, ListItemText, Stack } from '@mui/material'
import { CoursesCollection } from 'entities/courses/courses.types'

interface Props {
  courses: CoursesCollection
  selected: Collection<string, string>
  removeSelect: (id: string) => () => void
  handleSelect: (id: string, planId: string) => () => void
}
export const CoursesList: FC<Props> = ({ courses, selected, removeSelect, handleSelect }) => {
  const isSelected = (id: string) => id in selected

  return (
    <List>
      {Object.entries(courses).map(([id, course]) => (
        <React.Fragment key={id}>
          <ListItem>
            <ListItemIcon>
              <Checkbox onClick={removeSelect(id)} checked={isSelected(id)} edge='start' tabIndex={-1} disableRipple />
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
  )
}
