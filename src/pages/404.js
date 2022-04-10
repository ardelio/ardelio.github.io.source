import React from 'react'
import { Box, Container, Stack, Typography } from '@mui/material'

import AppBar from '../components/pages/blog/AppBar'
import Avatar from '../components/pages/home/Avatar'
import Socials from '../components/pages/home/Socials'

export default function Index() {
  const SPACER = <Box />
  return (
    <Container>
      <AppBar pageTitle="Not Found" pageUrl="N/A" />
      <Stack spacing={6} sx={{ height: '100%', width: '100%' }}>
        {SPACER}
        <Avatar />
        <Socials />
        <Box textAlign="center">
          <Typography variant="h2">
            This is the{' '}
            <Typography variant="h1" component="span">
              NOT FOUND
            </Typography>{' '}
            page you're looking for...
          </Typography>
        </Box>
      </Stack>
    </Container>
  )
}
