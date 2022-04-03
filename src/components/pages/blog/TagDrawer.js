import React from 'react'
import PropTypes from 'prop-types'
import {
  AppBar,
  Box,
  Input,
  InputAdornment,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material'
import { Button, Link } from 'gatsby-theme-material-ui'
import { Search } from '@mui/icons-material'

export default function TagDrawer({ tags }) {
  const [filteredTags, setFilteredTags] = React.useState(tags)

  const onSearchChange = ({ target: { value }}) => {
    if (value === '') {
      setFilteredTags(tags);
    } else {
      setFilteredTags(tags.filter(tag => Boolean(tag.match(value))))
    }
  };

  return (
    <AppBar
      elevation={0}
      position="fixed"
      color="primary"
      sx={{ top: 'auto', bottom: 0 }}
    >
      <Toolbar sx={{ overflow: 'scroll' }}>
        <Stack direction="row" spacing={1}>
          <Typography mr={4} variant="h6" gridAutoFlow="row">
            Tags
          </Typography>
          <Box width={150}>
            <Input
              sx={{
                color: 'white',
              }}
              color="secondary"
              focused
              placeholder="Enter a tag"
              startAdornment={
                <InputAdornment position="start">
                  <Search color="secondary" />
                </InputAdornment>
              }
              onChange={onSearchChange}
            />
          </Box>
          {filteredTags.map(tag => (
            <Button key={tag} size="small" color="secondary" variant="outlined">
              <Link to={`/blog/tags/${tag}`} underline="none" color="secondary">
                {tag}
              </Link>
            </Button>
          ))}
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

TagDrawer.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
}
