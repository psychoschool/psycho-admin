import { UserResponse } from 'resources/types'

export interface CourseResponse {
  id: string
  title: string
  image: string
  isFree: boolean
  description: string
  author: UserResponse
  url: string
  sections: Array<{ title: string; lectures: Array<Lecture> }>
  price: { cost: number; promoCost?: number }
  skills: Array<string>
}

export interface Lecture {
  id: string
  type: 'video'
  url: string
  title: string
}
