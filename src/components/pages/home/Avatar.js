import React from 'react'
import { Stack } from '@mui/material'
import { StaticImage } from 'gatsby-plugin-image'

import theme from '../../../theme'

const BORDER_RADIUS = '50%';
const BORDER_WIDTH = '2px';
const DIMENSION = 100

// https://www.gatsbyjs.com/plugins/gatsby-plugin-image

export default function Avatar() {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
    >
      <StaticImage
        src="../../../images/avatar.png"
        alt="Ardelio avatar"
        placeholder="blurred"
        width={DIMENSION}
        height={DIMENSION}
        imgStyle={{
          border: `${BORDER_WIDTH} solid ${theme.palette.primary.main}`,
          borderRadius: BORDER_RADIUS,
        }}
      />
    </Stack>
  );
}