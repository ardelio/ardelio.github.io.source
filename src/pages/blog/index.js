import React from 'react'
import { graphql } from 'gatsby'
import { Box, Container, Stack } from '@mui/material'

import AppBar from '../../components/pages/blog/AppBar'
import { FEATURES } from '../../constants'
import Post from '../../components/pages/blog/Post'

export default function Blog({
  data: {
    allMarkdownRemark: { edges },
  },
}) {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <Post key={edge.node.id} post={edge.node} />)

  const SPACER = <Box />

  return (
    <Container>
      <AppBar pageUrl={FEATURES.BLOG.url} />
      <Stack spacing={6} sx={{ height: '100%', width: '100%' }}>
        {SPACER}
        {Posts}
      </Stack>
    </Container>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
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
