import React from 'react'
import { useGridApiContext, useGridState } from '@mui/x-data-grid'
import { Pagination } from '@mui/material'

export function CustomPagination() {
  const apiRef = useGridApiContext()
  const [state] = useGridState(apiRef)

  return (
    <Pagination
      color='primary'
      count={state.pagination.pageCount}
      page={state.pagination.page + 1}
      onChange={(event, value) => apiRef.current.setPage(value - 1)}
    />
  )
}
