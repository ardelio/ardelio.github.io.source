import React from 'react'
import PropTypes from 'prop-types'
import { Box, Button, Card, CardContent, Grid, Typography } from '@mui/material'

import WithShadow from '../../WithShadow'
import { Link } from 'gatsby-theme-material-ui'

const BORDER_RADIUS = 1
const BORDER_WIDTH = '2px'

export default function Post({ date, html, tags, title, id }) {
  return (
    <Box>
      <WithShadow>
        <Card
          sx={theme => ({
            border: `${BORDER_WIDTH} solid ${theme.palette.primary.main}`,
            borderRadius: BORDER_RADIUS,
          })}
          variant="outlined"
        >
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              {title}
            </Typography>
            <Typography gutterBottom variant="caption">
              {date}
            </Typography>
            <Typography>
              <div dangerouslySetInnerHTML={{ __html: html }} />
            </Typography>
            <Grid container mt={2} spacing={1}>
              {tags.sort().map(tag => (
                <Grid item key={`${id}-${tag}`}>
                  <Button
                    size="small"
                    sx={theme => ({
                      backgroundColor: theme.palette.primary.main,
                      '&:hover': {
                        backgroundColor: theme.palette.primary.light,
                      },
                    })}
                  >
                    <Link
                      to={`/blog/tags/${tag}`}
                      underline="none"
                      color="white"
                    >
                      {tag}
                    </Link>
                  </Button>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </WithShadow>
    </Box>
  )
}

Post.propTypes = {
  date: PropTypes.string,
  html: PropTypes.string,
  id: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
}
