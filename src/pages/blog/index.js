import React from 'react'
import { graphql } from 'gatsby'
import { Container, Stack } from '@mui/material'

import PostLink from '../../components/post-link'
import AppBar from '../../components/pages/blog/AppBar'
import { FEATURES } from '../../constants'

export default function Blog({
  data: {
    allMarkdownRemark: { edges },
  },
}) {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
  return (
    <Container>
      <AppBar pageUrl={FEATURES.BLOG.url} />
      <Stack spacing={6} sx={{ height: '100%', width: '100%' }}></Stack>
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
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
        }
      }
    }
  }
`
