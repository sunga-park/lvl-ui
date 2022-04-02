import React from 'react'
import { Box } from '@mui/material'
import { Tracks } from '../../views'

export default function MainLayout () {
  return (
    <Box display="flex" flexDirection="column" flexGrow={1} sx={{ backgroundColor: '#722eb270' }}>
      <Box display="flex" m={10}>
        <Tracks />
      </Box>
    </Box>
  )
}