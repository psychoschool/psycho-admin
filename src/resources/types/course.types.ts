import { UserResponse } from 'resources/types'

export interface CourseResponse {
  id: string
  title: string
  image: string
  isFree: boolean
  description: string
  author: UserResponse
  slug: string
  sections: Array<{ title: string; lectures: Array<Lecture> }>
  price: { cost: number; promoCost?: number }
  skills: Array<string>
}

export interface Lecture {
  id: string
  type: 'video'
  slug: string
  title: string
}
