import React from 'react';
import { Box, Stack } from '@mui/material';

import Feature from './Feature'
import { FEATURES } from '../../../constants';

export default function Features() {
  return (
    <Stack
      spacing={3}
    >
      {
        Object
          .keys(FEATURES)
          .map(key => FEATURES[key])
          .map(feature => (
            <Box
              key={feature.name}
            >
              <Feature feature={feature} />
            </Box>
          ))
      }
    </Stack>
  );
}