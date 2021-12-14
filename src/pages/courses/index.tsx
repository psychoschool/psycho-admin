import React from 'react'
import { Helmet } from 'react-helmet'
import { Courses } from 'components/courses'

const CoursesPage = () => {
  return (
    <>
      <Helmet>
        <title>Курсы</title>
      </Helmet>

      <Courses />
    </>
  )
}

export default CoursesPage
