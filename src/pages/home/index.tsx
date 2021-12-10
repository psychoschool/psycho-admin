import React from 'react'
import { Helmet } from 'react-helmet'
import { Home } from 'components/home'

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Homa page</title>
      </Helmet>

      <Home />
    </>
  )
}

export default HomePage
