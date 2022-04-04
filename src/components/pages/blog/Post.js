import React from 'react'
import PropTypes from 'prop-types'
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from '@mui/material'
import { Button, Link } from 'gatsby-theme-material-ui'
import { getSrcSet } from 'gatsby-plugin-image'
import WithShadow from '../../WithShadow'

const BORDER_RADIUS = 1
const BORDER_WIDTH = '2px'
const IMAGE_HEIGHT = '150px'

export default function Post({ post }) {
  const imageSrcSet = getSrcSet(post.frontmatter.featuredImage)
  const tags = [...new Set(post.frontmatter.tags)]
  return (
    <Stack alignItems="center">
      <WithShadow>
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
            <Typography variant="body2">{post.excerpt}</Typography>
            <Grid container mt={2} spacing={1}>
              {tags.map(tag => (
                <Grid item key={`${post.id}-${tag}`}>
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
          <CardActions>
            <Button size="small">
              <Link to={post.frontmatter.slug} underline="none">
                Read more
              </Link>
            </Button>
          </CardActions>
        </Card>
      </WithShadow>
    </Stack>
  )
}

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string,
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
