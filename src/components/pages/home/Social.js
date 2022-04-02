import React from 'react';
import PropTypes from 'prop-types'
import { SOCIALS } from '../../../constants';
import { Instagram, LinkedIn, Reddit, Twitter } from '@mui/icons-material';
import { Link } from '@mui/material';

// https://mui.com/components/material-icons/

export default function Social({ social }) {
  return (
    <Link
      href={social.url.replace('${}', social.username)}
      target='blank'
    >
      {getIcon(social.name)}
    </Link>
  );
}

Social.propTypes = {
  social: PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
    username: PropTypes.string,
  }),
}

function getIcon(socialName) {
  switch (socialName) {
    case SOCIALS.LINKED_IN.name:
      return <LinkedIn fontSize='large' />

    case SOCIALS.INSTAGRAM.name:
      return <Instagram fontSize='large' />

    case SOCIALS.REDDIT.name:
      return <Reddit fontSize='large' />

    case SOCIALS.TWITTER.name:
      return <Twitter fontSize='large' />

    default:
      throw new Error(`${socialName} is not so social!`)
  }
}