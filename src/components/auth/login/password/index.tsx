import React, { FC, useState } from 'react'
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'

interface Props {
  value: string
  onValueChange: (value: string) => void
}

export const Password: FC<Props> = ({ value, onValueChange }) => {
  const [showPassword, setShowPassword] = useState(false)
  const handleClick = () => setShowPassword(!showPassword)

  return (
    <FormControl sx={{ width: '100%' }}>
      <InputLabel>Password</InputLabel>

      <OutlinedInput
        value={value}
        label='Password'
        type={showPassword ? 'text' : 'password'}
        onChange={e => onValueChange(e.target.value)}
        endAdornment={
          <InputAdornment position='end'>
            <IconButton onClick={handleClick} edge='end'>
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  )
}
