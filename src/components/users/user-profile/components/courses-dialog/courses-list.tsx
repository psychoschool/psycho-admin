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
      {Object.entries(courses).map(([coursesId, course]) => (
        <React.Fragment key={coursesId}>
          <ListItem>
            <ListItemIcon>
              <Checkbox
                onClick={removeSelect(coursesId)}
                checked={isSelected(coursesId)}
                edge='start'
                tabIndex={-1}
                disableRipple
              />
            </ListItemIcon>
            <ListItemText primary={course.title} secondary={`Author: ${course.author.firstName}`} />

            <Stack direction='row' spacing={1}>
              {Object.entries(course.paidPlans).map(([planId, plan]) => (
                <Chip
                  key={planId}
                  label={plan.name}
                  onClick={handleSelect(coursesId, planId)}
                  variant={selected?.[coursesId] === plan.id ? 'filled' : 'outlined'}
                  color={selected?.[coursesId] === plan.id ? 'primary' : 'default'}
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
