import * as React from 'react'
import { DataGrid, GridColumns, GridRowsProp, GridToolbar, GridRenderCellParams, ruRU } from '@mui/x-data-grid'
import { Avatar, Link } from '@mui/material'
import { CustomNoRowsOverlay } from 'components/home/users-grid/empty-state'
import { CustomLoadingOverlay } from 'components/home/users-grid/loader'
import { CustomPagination } from 'components/home/users-grid/pagination'
import { stringAvatar } from 'components/home/users-grid/utils/color.util'
import { FC } from 'react'

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
  }
  // {
  //   field: 'lastLogin',
  //   headerName: 'Last Login',
  //   type: 'dateTime',
  //   width: 220,
  //   editable: true
  // }
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
