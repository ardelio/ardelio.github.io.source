import React from 'react';
import PropTypes from 'prop-types'
import { Link, Paper, Stack } from '@mui/material';

export default function Social({ social }) {
  return (
    <Paper
      sx={(theme) => ({
        backgroundColor: theme.palette.background.component,
      })}
    >

      <Link
        href={social.url.replace('${}', social.username)}
        sx={{ color: 'white' }}
        target='blank'
        underline='none'
      >
        <Stack
          alignItems="center"
          height={100}
          justifyContent="center"
        >
          {social.name}
        </Stack>

      </Link>
    </Paper>
  );
}

Social.propTypes = {
  social: PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
    username: PropTypes.string,
  }),
}