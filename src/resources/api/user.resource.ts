import { resource } from 'utils/resource.util'
import { JSON_API } from 'config/services'
import { UserResponse } from 'resources/types'
import { normalizeUser } from 'schemas/auth.schema'

export const getUser = resource(ctx => ({
  ctx,
  name: 'getUsers',
  method: 'GET',
  serviceName: JSON_API,
  url: '/users',
  onSuccess: (response: UserResponse) => normalizeUser(response),
  onError: error => error
}))
