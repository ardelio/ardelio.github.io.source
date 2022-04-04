import React from 'react'
import { graphql } from 'gatsby'
import { Box, Container, Stack } from '@mui/material'

import AppBar from '../../components/pages/blog/AppBar'
import { FEATURES } from '../../constants'
import Post from '../../components/pages/blog/Post'
import TagDrawer from '../../components/pages/blog/TagDrawer'

export default function Blog({
  data: {
    allPosts: { distinctTags, edges },
  },
}) {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <Post key={edge.node.id} post={edge.node} />)

  const SPACER = <Box />

  return (
    <Container>
      <AppBar pageName={FEATURES.BLOG.name} pageUrl={FEATURES.BLOG.url} />
      <Stack spacing={6} sx={{ height: '100%', width: '100%' }}>
        {SPACER}
        {Posts}
      </Stack>
      <TagDrawer tags={distinctTags} />
    </Container>
  )
}

export const pageQuery = graphql`
  query {
    allPosts: allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
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
