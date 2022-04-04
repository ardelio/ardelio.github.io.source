import React from 'react'
import { Box, Container, Stack } from '@mui/material'

import Avatar from '../components/pages/home/Avatar'
import Features from '../components/pages/home/Features'
import Socials from '../components/pages/home/Socials'
import Username from '../components/pages/home/Username'

export default function Index() {
  const SPACER = <Box />
  return (
    <Container>
      <Stack spacing={6} sx={{ height: '100%', width: '100%' }}>
        {SPACER}
        <Avatar />
        <Username />
        <Socials />
        {/* <Features /> */}
      </Stack>
    </Container>
  )
}
