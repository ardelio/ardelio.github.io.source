import React from 'react'
import { Container, Stack } from '@mui/material'

import Features from '../components/pages/home/Features'
import Socials from '../components/pages/home/Socials'

export default function Index() {
  return (
    <Container>
      <Stack
        spacing={8}
        sx={{ height: '100%', width: '100%' }}
      >
        <Features />
        <Socials />
      </Stack>
    </Container>
  )
}