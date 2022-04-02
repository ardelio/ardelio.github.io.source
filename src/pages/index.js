import React from 'react'
import { Box, Container } from '@mui/material'

import Features from '../components/pages/home/Features'

export default function Index() {
  return (
    <Container>
      <Box sx={{ height: '100%', width: '100%' }}>
        <Features />
      </Box>
    </Container>
  )
}