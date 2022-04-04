import React from 'react'
import PropTypes from 'prop-types'
import { Paper, Stack, Typography } from '@mui/material'
import { Link } from 'gatsby-theme-material-ui'

import WithShadow from '../../WithShadow'

const BORDER_RADIUS = 1
const BORDER_WIDTH = 2
const HEIGHT = 100

export default function Feature({ feature }) {
  return (
    <WithShadow>
      <Paper
        elevation={0}
        sx={theme => ({
          borderColor: theme.palette.primary.main,
          borderRadius: BORDER_RADIUS,
          borderWidth: BORDER_WIDTH,
        })}
        variant="outlined"
      >
        <Link to={feature.url} underline="none">
          <Stack alignItems="center" height={HEIGHT} justifyContent="center">
            <Typography variant="h4">{feature.name}</Typography>
          </Stack>
        </Link>
      </Paper>
    </WithShadow>
  )
}

Feature.propTypes = {
  feature: PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
  }),
}
