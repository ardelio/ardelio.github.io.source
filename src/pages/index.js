import React from 'react'
import { Box, Container, Stack } from '@mui/material'

import Avatar from '../components/pages/home/Avatar'
import Features from '../components/pages/home/Features'
import Socials from '../components/pages/home/Socials'

export default function Index() {
  return (
    <Container>
      <Stack
        spacing={6}
        sx={{ height: '100%', width: '100%' }}
      >
        <Box></Box>
        <Avatar />
        <Socials />
        <Features />
      </Stack>
    </Container>
  )
}