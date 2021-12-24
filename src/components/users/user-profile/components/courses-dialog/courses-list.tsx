import React, { FC } from 'react'
import { Checkbox, Chip, Divider, List, ListItem, ListItemIcon, ListItemText, Stack } from '@mui/material'
import { CoursesCollection } from 'entities/courses/courses.types'

interface Props {
  courses: CoursesCollection
  selected: Array<string>
  handleSelect: (id: string) => () => void
}
export const CoursesList: FC<Props> = ({ courses, selected, handleSelect }) => {
  const isSelected = (id: string) => selected.includes(id)

  return (
    <List>
      {Object.entries(courses).map(([coursesId, course]) => (
        <React.Fragment key={coursesId}>
          <ListItem>
            <ListItemIcon>
              <Checkbox
                onClick={handleSelect(coursesId)}
                checked={isSelected(coursesId)}
                edge='start'
                tabIndex={-1}
                disableRipple
              />
            </ListItemIcon>
            <ListItemText primary={course.title} secondary={`Author: ${course.author.firstName}`} />

            <Stack direction='row' spacing={1}>
              <Chip label={course.isFree ? 'free' : course.price.cost} />
            </Stack>
          </ListItem>
          <Divider />
        </React.Fragment>
      ))}
    </List>
  )
}
