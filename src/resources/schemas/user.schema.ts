import { UserResponse } from 'resources/types'
import { UsersCollection } from 'entities/user/user.types'

export const normalizeUser = (response: Array<UserResponse>): UsersCollection => {
  return response.reduce((acc, user) => {
    acc[user.id] = user

    return acc
  }, {} as UsersCollection)
}
