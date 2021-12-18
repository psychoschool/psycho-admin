import { resource } from 'utils/resource.util'
import { PSYCHO_API } from 'config/services'
import { UserResponse } from 'resources/types'
import { normalizeUser } from 'schemas/user.schema'
import { User } from 'entities/user/user.types'

export const getAllUsers = resource(ctx => ({
  ctx,
  name: 'getUsers',
  method: 'GET',
  serviceName: PSYCHO_API,
  url: '/users',
  onSuccess: (response: Array<UserResponse>) => normalizeUser(response),
  onError: error => error
}))

export const getCurrentUser = resource(ctx => ({
  ctx,
  name: 'checkAuth',
  method: 'GET',
  serviceName: PSYCHO_API,
  url: '/me',
  onSuccess: (response: UserResponse) => response,
  onError: error => error
}))

export const getUserById = resource((ctx, id: string) => ({
  ctx,
  name: 'checkAuth',
  method: 'GET',
  serviceName: PSYCHO_API,
  url: `/users/${id}`,
  onSuccess: (response: UserResponse) => response,
  onError: error => error
}))

export const updateUserById = resource((ctx, params: Partial<User>) => ({
  ctx,
  name: 'checkAuth',
  method: 'PUT',
  serviceName: PSYCHO_API,
  url: `/users/${params.id}`,
  data: params,
  onSuccess: (response: UserResponse) => response,
  onError: error => error
}))
