import React, { FC } from 'react'
import { Avatar, Chip, Link } from '@mui/material'
import { DataGrid, GridColumns, GridRowsProp, GridToolbar, GridRenderCellParams, ruRU } from '@mui/x-data-grid'
import { CustomNoRowsOverlay, CustomLoadingOverlay, CustomPagination } from './components'
import { stringAvatar } from './utils/color.util'
import FaceIcon from '@mui/icons-material/Face'

const columns: GridColumns = [
  {
    field: 'avatar',
    headerName: 'Avatar',
    width: 100,
    type: 'string',
    sortable: false,
    renderCell: (params: GridRenderCellParams<string>) => <Avatar {...stringAvatar(params.value)} />
  },
  { field: 'firstName', headerName: 'Имя', width: 180 },
  { field: 'phone', headerName: 'Телефон', width: 180 },
  {
    field: 'email',
    headerName: 'Почта',
    type: 'string',
    width: 200,
    editable: true,
    renderCell: (params: GridRenderCellParams<string>) => <Link>{params.value}</Link>
  },
  {
    field: 'role',
    headerName: 'Роль',
    type: 'singleSelect',
    valueOptions: ['Admin', 'Tutor', 'Student'],
    renderCell: (params: GridRenderCellParams<string>) => <Chip label={params.value} icon={<FaceIcon />} />,
    width: 200,
    editable: true
  }
]

interface Props {
  items: GridRowsProp
}
export const UsersGrid: FC<Props> = ({ items }) => {
  return (
    <div style={{ height: 'calc(100vh - 124px)', width: '100%' }}>
      <DataGrid
        rows={items}
        columns={columns}
        components={{
          NoRowsOverlay: CustomNoRowsOverlay,
          LoadingOverlay: CustomLoadingOverlay,
          Pagination: CustomPagination,
          Toolbar: GridToolbar
        }}
        density='comfortable'
        disableSelectionOnClick={false}
        localeText={ruRU.components.MuiDataGrid.defaultProps.localeText}
        loading={false}
      />
    </div>
  )
}
