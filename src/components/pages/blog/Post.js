import React from 'react'
import PropTypes from 'prop-types'
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Paper,
  Stack,
  Typography,
} from '@mui/material'
import { Button, Link } from 'gatsby-theme-material-ui'
import { getSrcSet } from 'gatsby-plugin-image'

const BORDER_RADIUS = 1
const BORDER_WIDTH = '2px'
const IMAGE_HEIGHT = '150px'
const SHADOW_OFFSET = 12

export default function Post({ post }) {
  const imageSrcSet = getSrcSet(post.frontmatter.featuredImage)
  const tags = [...new Set(post.frontmatter.tags)]
  return (
    <Stack alignItems="center">
      <Box
        sx={{
          position: 'relative',
        }}
      >
        <Card
          sx={theme => ({
            maxWidth: 500,
            border: `${BORDER_WIDTH} solid ${theme.palette.primary.main}`,
            borderRadius: BORDER_RADIUS,
          })}
          variant="outlined"
        >
          <CardMedia
            component="img"
            height={IMAGE_HEIGHT}
            alt={post.frontmatter.featuredImageAlt}
            srcSet={imageSrcSet}
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              {post.frontmatter.title}
            </Typography>
            <Typography gutterBottom variant="caption">
              {post.frontmatter.date}
            </Typography>
            <Typography color="text.secondary">{post.excerpt}</Typography>
            <Grid container mt={2} spacing={1}>
              {tags.map(tag => (
                <Grid item>
                  <Chip color="primary" label={tag} />
                </Grid>
              ))}
            </Grid>
          </CardContent>
          <CardActions>
            <Button size="small">
              <Link to={post.frontmatter.slug} underline="none">
                Read more
              </Link>
            </Button>
          </CardActions>
        </Card>
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
    </Stack>
  )
}

Post.propTypes = {
  post: PropTypes.shape({
    excerpt: PropTypes.string,
    frontmatter: PropTypes.shape({
      slug: PropTypes.string,
      date: PropTypes.string,
      tags: PropTypes.arrayOf(PropTypes.string),
      title: PropTypes.string,
      featuredImage: PropTypes.shape({
        childImageSharp: PropTypes.shape({
          fluid: PropTypes.shape({
            src: PropTypes.string,
          }),
        }),
      }),
      featuredImageAlt: PropTypes.string,
    }),
  }),
}
