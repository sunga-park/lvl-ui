
import { styled } from '@mui/material/styles';
import { DataGrid } from '@mui/x-data-grid'

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  border: 0,
  '& .MuiDataGrid-dataContainer': {
    minHeight: '100%!important'
  },
  '& .MuiDataGrid-viewport': {
    overflow: 'initial'
  },
  '& .MuiDataGrid-renderingZone': {
    transform: 'none!important'
  },
  '& .MuiDataGrid-columnsContainer': {
    minHeight: '40px !important',
    maxHeight: '40px !important',
    lineHeight: '40px !important',
    borderBottom: '1px solid #33403F'
  },
  '& .MuiDataGrid-window': {
    top: '40px !important'
  },
  '& .MuiDataGrid-columnCell': {
    padding: '0px 8px'
  },
  '& .MuiDataGrid-columnHeader:focus': {
    outline: 'none'
  },
  '& .MuiDataGrid-columnHeader:focus-within': {
    outline: 'none'
  },
  '& .MuiDataGrid-columnHeaderTitle': {
    fontSize: '18px',
    fontWeight: 600
  },
  '& .MuiDataGrid-columnHeaderTitleContainer': {
    minHeight: '40px',
    padding: 0
  },
  '& .MuiDataGrid-columnSeparator': {
    display: 'none'
  },
  '& .MuiDataGrid-cell': {
    fontWeight: 500,
    fontSize: '1rem',
    lineHeight: 'initial !important',
    whiteSpace: 'normal',
    display: 'flex',
    alignItems: 'center',
    height: 'auto',
    minHeight: '35px !important',
    padding: '5px 10px'
  },
  '& .MuiDataGrid-cellCenter': {
    justifyContent: 'center'
  },
  '& .MuiDataGrid-colCell:focus': {
    outline: 'none'
  },
  '& .MuiDataGrid-cell:focus': {
    outline: 'none'
  },
  '& .MuiDataGrid-cell:focus-within': {
    outline: 'none'
  },
  '& .MuiDataGrid-footer': {
    justifyContent: 'flex-start'
  },
  '& .MuiDataGrid-row': {
    maxHeight: '140px !important',
    minHeight: '35px !important'
  }
}))

export default StyledDataGrid