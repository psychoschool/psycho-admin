import { UserResponse } from 'resources/types'

export type User = {
  user: Camelize<UserResponse> | null
}
