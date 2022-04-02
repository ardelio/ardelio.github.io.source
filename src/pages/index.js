import React from 'react'
import { Box, Container, Paper } from '@mui/material'

import Socials from '../components/pages/home/Socials'

export default function Index() {
  return (
    <Container>
      <Box sx={{ height: '100%', width: '100%' }}>
        <Socials />
      </Box>
    </Container>
  )
}