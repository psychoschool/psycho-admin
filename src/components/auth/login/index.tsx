import React, { FC, useState } from 'react'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import { Button, Paper } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { Password } from 'components/auth/login/password'
import { useAuthActions } from 'entities/auth/auth.slice'
import { useAppDispatch } from 'utils/store.util'

export const Login: FC = () => {
  const dispatch = useAppDispatch()
  const { signIn } = useAuthActions(dispatch)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = () => signIn({ email, password })

  return (
    <Paper elevation={2} sx={{ padding: 4, marginTop: 8, width: 400 }}>
      <Stack component='form' spacing={2} alignItems='center'>
        <AccountCircleIcon style={{ width: 150, height: 150 }} />

        <TextField value={email} onChange={e => setEmail(e.target.value)} sx={{ width: '100%' }} label='Email' />

        <Password value={password} onValueChange={setPassword} />

        <Button onClick={handleSubmit} style={{ marginTop: 32 }} sx={{ width: '100%' }} variant='contained'>
          Войти
        </Button>
      </Stack>
    </Paper>
  )
}
