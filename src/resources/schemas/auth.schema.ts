import camelize from 'camelize'
import { UserResponse } from 'resources/types'

export const normalizeUser = (response: UserResponse): Camelize<UserResponse> => {
  return camelize(response)
}
