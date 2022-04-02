import React, { useState } from 'react'
import { useQuery } from 'react-query'

import { Box, Typography, InputAdornment, InputBase  } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { StyledDataGrid } from '../../components'

export default function Tracks () {
  const [search, setSearch] = useState('')

  const handleTrackSearch = (event) => {
    setSearch(event.target.value)
  }
  const { data } = useQuery(['track', search], () => {
    var url = new URL('http://localhost:3000/tracks')
    url.search = new URLSearchParams({name: search}).toString()
    return fetch(url)
  })

  const columns = [
    { field: 'id', hide: true},
    {
      field: 'title',
      headerName: 'Title',
      flex: 1
    },
    { field: 'albumId', hide: true},
    { field: 'mediaTypeId', hide: true},
    { field: 'genreId', hide: true},
    { field: 'composer', hide: true},
    {
      field: 'duration',
      headerName: 'Duration',
      width: 200
    },
    {
      field: 'size',
      headerName: 'Size'
    },
    { field: 'price', hide: true}
  ]

  return (
    <Box display="flex" flexDirection="column" flexGrow={1}>
      <Box my={2}>
        <Typography variant="h3">Tracks</Typography>
      </Box>
      <Box my={2} sx={{ backgroundColor: 'white', borderRadius: '4px' }}>
        <InputBase
          placeholder='Search Tracks'
          variant='outlined'
          fullWidth
          startAdornment={<InputAdornment><SearchIcon/></InputAdornment>}
          sx={{
            backgroundColor: '#722eb220',
            border: '1.5px solid #722eb220',
            borderRadius: '4px',
            fontWeight: 500,
            paddingLeft: '6px'
          }}
          value={search || ''}
          onChange={handleTrackSearch}
        />
      </Box>
      <Box my={2} height={500}>
        <StyledDataGrid
          columns={columns}
          rows={data}
        />
      </Box>
    </Box>
  )
}