import React, { FC, useState } from 'react'
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { UserRole } from 'resources/types'

interface Props {
  initialValue: UserRole
  onChange: (value: UserRole) => void
}
export const RolesSelect: FC<Props> = ({ initialValue, onChange }) => {
  const [value, setValue] = useState(initialValue)
  const handleChange = (event: SelectChangeEvent) => {
    const role = event.target.value as UserRole
    setValue(role)
    onChange(role)
  }

  return (
    <FormControl variant='standard' sx={{ m: 1, minWidth: 120 }}>
      <InputLabel>Role</InputLabel>
      <Select value={value} onChange={handleChange}>
        <MenuItem value='admin'>admin</MenuItem>
        <MenuItem value='tutor'>tutor</MenuItem>
        <MenuItem value='student'>student</MenuItem>
      </Select>
    </FormControl>
  )
}
