import React from 'react';
import { Box, Stack } from '@mui/material';

import { SOCIALS } from '../../../constants';
import Social from './Social';

export default function Socials() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      spacing={3}
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