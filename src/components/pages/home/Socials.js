import React from 'react';
import { Box, Stack } from '@mui/material';

import Social from './Social'
import { SOCIALS } from '../../../constants';

export default function Socials() {
  return (
    <Stack
      spacing={2}
    >
      {
        Object
          .keys(SOCIALS)
          .map(key => SOCIALS[key])
          .map(social => (
            <Box
              key={social.name}
            >
              <Social social={social} />
            </Box>
          ))
      }
    </Stack>
  );
}