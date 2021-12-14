import { UserResponse } from 'resources/types'

type UserId = string
export type User = Camelize<UserResponse>
export type UsersCollection = Collection<UserId, User>
