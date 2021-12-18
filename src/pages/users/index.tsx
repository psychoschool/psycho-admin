import React from 'react'
import { Helmet } from 'react-helmet'
import { Users } from 'components/users'

const UsersPage = () => {
  return (
    <>
      <Helmet>
        <title>Users page</title>
      </Helmet>

      <Users />
    </>
  )
}

export default UsersPage
