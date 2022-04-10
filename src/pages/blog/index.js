import React from 'react'
import { graphql } from 'gatsby'
import { Box, Container, Stack, Typography } from '@mui/material'

import AppBar from '../../components/pages/blog/AppBar'
import { FEATURES } from '../../constants'
import PostCard from '../../components/pages/blog/PostCard'
import Socials from '../../components/pages/home/Socials'
import TagDrawer from '../../components/pages/blog/TagDrawer'

export default function Blog({
  data: {
    allPublishedPosts: { distinctTags, edges },
  },
}) {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostCard key={edge.node.id} post={edge.node} />)

  const NoPosts = (
    <Box textAlign="center">
      <Typography>These aren't the posts you're looking for...</Typography>
    </Box>
  )

  const SPACER = <Box />
  const BOTTOM_SPACER = <Box height="50px" />

  return (
    <Container>
      <AppBar pageTitle={FEATURES.BLOG.name} pageUrl={FEATURES.BLOG.url} />
      <Stack spacing={6} sx={{ height: '100%', width: '100%' }}>
        {SPACER}
        <Socials />
        {Posts.length > 0 ? Posts : NoPosts}
        {Posts.length > 3 && <Socials />}
        {BOTTOM_SPACER}
      </Stack>
      <TagDrawer tags={distinctTags} />
    </Container>
  )
}

export const pageQuery = graphql`
  query {
    allPublishedPosts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      distinctTags: distinct(field: frontmatter___tags)
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            slug
            tags
            title
            featuredImage {
              childImageSharp {
                gatsbyImageData(
                  width: 500
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, PNG]
                  layout: FIXED
                )
              }
            }
            featuredImageAlt
          }
        }
      }
    }
  }
`
