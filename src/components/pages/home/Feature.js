import React from 'react';
import PropTypes from 'prop-types'
import { Box, Link, Paper, Stack, Typography } from '@mui/material';

const BORDER_RADIUS = 1;
const BORDER_WIDTH = 2;
const HEIGHT = 100;
const SHADOW_OFFSET = 12;

export default function Feature({ feature }) {
  return (
    <Box
      sx={{
        position: 'relative',
      }}
    >
      <Paper
        elevation={0}
        sx={(theme) => ({
          borderColor: theme.palette.primary.main,
          borderRadius: BORDER_RADIUS,
          borderWidth: BORDER_WIDTH,
        })}
        variant='outlined'
      >

        <Link
          href={feature.url}
          target='blank'
          underline='none'
        >
          <Stack
            alignItems="center"
            height={HEIGHT}
            justifyContent="center"
          >
            <Typography
              variant='h4'
            >
              {feature.name}
            </Typography>
          </Stack>
        </Link>
      </Paper>
      <Paper
        sx={(theme) => ({
          backgroundColor: theme.palette.primary.main,
          height: HEIGHT,
          position: 'absolute',
          zIndex: '-11',
          top: SHADOW_OFFSET,
          left: SHADOW_OFFSET,
          borderRadius: BORDER_RADIUS,
          borderWidth: BORDER_WIDTH,
          height: '100%',
          width: '100%',
        })}
        variant='outlined'
      ></Paper>
    </Box>
  );
}

Feature.propTypes = {
  feature: PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
  }),
}