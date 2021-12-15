import React from 'react'
import { GridOverlay } from '@mui/x-data-grid'
import { LinearProgress } from '@mui/material'

export function CustomLoadingOverlay() {
  return (
    <GridOverlay>
      <div style={{ position: 'absolute', top: 0, width: '100%' }}>
        <LinearProgress />
      </div>
    </GridOverlay>
  )
}
