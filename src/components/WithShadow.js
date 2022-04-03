import React from 'react'
import PropTypes from 'prop-types'
import { Box, Paper } from '@mui/material'

const BORDER_RADIUS = 1
const BORDER_WIDTH = '2px'
const SHADOW_OFFSET = 12

export default function WithShadow({ children }) {
  return (
    <Box
      sx={{
        position: 'relative',
      }}
    >
      {children}
      <Paper
          sx={theme => ({
            backgroundColor: theme.palette.primary.main,
            position: 'absolute',
            zIndex: '-11',
            top: SHADOW_OFFSET,
            left: SHADOW_OFFSET,
            borderRadius: BORDER_RADIUS,
            borderWidth: BORDER_WIDTH,
            height: '100%',
            width: '100%',
          })}
          variant="outlined"
        />
    </Box>
  )
}

WithShadow.propTypes = {
  children: PropTypes.element
}